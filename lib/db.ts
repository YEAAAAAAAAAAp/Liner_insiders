import { sql } from '@vercel/postgres';

export type Subscription = {
  id: number;
  company: string;
  email: string;
  teamsize: string;
  phonenumber: string;
  createdat: string;
};

export type CreateSubscriptionInput = {
  company: string;
  email: string;
  teamSize: string;
  phoneNumber: string;
};

export class SubscriptionService {
  // Create
  static async createSubscription(data: CreateSubscriptionInput): Promise<Subscription> {
    try {
      const result = await sql<Subscription>`
        INSERT INTO subscriptions (company, email, teamsize, phonenumber)
        VALUES (${data.company}, ${data.email}, ${data.teamSize}, ${data.phoneNumber})
        RETURNING id, company, email, teamsize, phonenumber, createdat;
      `;
      
      if (!result.rows || result.rows.length === 0) {
        throw new Error('Failed to create subscription');
      }
      
      return result.rows[0];
    } catch (error) {
      console.error('SubscriptionService.createSubscription error:', error);
      throw error;
    }
  }

  // Read all
  static async getAllSubscriptions(): Promise<Subscription[]> {
    try {
      const result = await sql<Subscription>`
        SELECT id, company, email, teamsize, phonenumber, createdat
        FROM subscriptions
        ORDER BY createdat DESC;
      `;
      
      return result.rows || [];
    } catch (error) {
      console.error('SubscriptionService.getAllSubscriptions error:', error);
      throw error;
    }
  }

  // Read by ID
  static async getSubscriptionById(id: number): Promise<Subscription | null> {
    try {
      const result = await sql<Subscription>`
        SELECT id, company, email, teamsize, phonenumber, createdat
        FROM subscriptions
        WHERE id = ${id};
      `;
      
      return result.rows && result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error('SubscriptionService.getSubscriptionById error:', error);
      throw error;
    }
  }

  // Get count by segment (company)
  static async getCountByCompany(company: string): Promise<number> {
    try {
      const result = await sql<{ count: number }>`
        SELECT COUNT(*) as count
        FROM subscriptions
        WHERE company = ${company};
      `;
      
      return result.rows && result.rows.length > 0 ? result.rows[0].count : 0;
    } catch (error) {
      console.error('SubscriptionService.getCountByCompany error:', error);
      throw error;
    }
  }

  // Get stats
  static async getStats(): Promise<{ total: number; byCompany: Record<string, number> }> {
    try {
      const allResult = await sql<{ count: number }>`
        SELECT COUNT(*) as count FROM subscriptions;
      `;
      
      const byCompanyResult = await sql<{ company: string; count: number }>`
        SELECT company, COUNT(*) as count
        FROM subscriptions
        GROUP BY company
        ORDER BY count DESC;
      `;
      
      const total = allResult.rows && allResult.rows.length > 0 ? allResult.rows[0].count : 0;
      
      const byCompany: Record<string, number> = {};
      if (byCompanyResult.rows) {
        byCompanyResult.rows.forEach(row => {
          byCompany[row.company] = row.count;
        });
      }
      
      return { total, byCompany };
    } catch (error) {
      console.error('SubscriptionService.getStats error:', error);
      throw error;
    }
  }
}

