import { NextRequest, NextResponse } from 'next/server';
import { SubscriptionService, CreateSubscriptionInput } from './db';

export class SubscriptionController {
  // Validate input
  static validateInput(data: unknown): data is CreateSubscriptionInput {
    if (typeof data !== 'object' || data === null) return false;
    
    const obj = data as Record<string, unknown>;
    return (
      typeof obj.company === 'string' && obj.company.trim().length > 0 &&
      typeof obj.email === 'string' && obj.email.trim().length > 0 &&
      typeof obj.teamSize === 'string' && obj.teamSize.trim().length > 0 &&
      typeof obj.phoneNumber === 'string' && obj.phoneNumber.trim().length > 0
    );
  }

  // POST handler
  static async handlePost(req: NextRequest): Promise<NextResponse> {
    try {
      const body = await req.json().catch(() => null);

      if (!body || !this.validateInput(body)) {
        return NextResponse.json(
          { error: '모든 필드를 올바르게 입력해주세요.' },
          { status: 400 }
        );
      }

      const subscription = await SubscriptionService.createSubscription(body);

      console.log('✅ Subscription created:', subscription);

      return NextResponse.json(
        {
          success: true,
          message: '환급 신청이 완료되었습니다!',
          data: subscription
        },
        { status: 201 }
      );
    } catch (error) {
      console.error('❌ SubscriptionController.handlePost error:', error);
      return NextResponse.json(
        { error: '요청 처리 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }
  }

  // GET all handler
  static async handleGetAll(): Promise<NextResponse> {
    try {
      const subscriptions = await SubscriptionService.getAllSubscriptions();

      return NextResponse.json({
        success: true,
        total: subscriptions.length,
        subscriptions
      });
    } catch (error) {
      console.error('❌ SubscriptionController.handleGetAll error:', error);
      return NextResponse.json(
        { error: '데이터를 조회할 수 없습니다.' },
        { status: 500 }
      );
    }
  }

  // GET stats handler
  static async handleGetStats(): Promise<NextResponse> {
    try {
      const stats = await SubscriptionService.getStats();

      return NextResponse.json({
        success: true,
        ...stats
      });
    } catch (error) {
      console.error('❌ SubscriptionController.handleGetStats error:', error);
      return NextResponse.json(
        { error: '통계를 조회할 수 없습니다.' },
        { status: 500 }
      );
    }
  }
}

