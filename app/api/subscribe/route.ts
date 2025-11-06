import { NextRequest, NextResponse } from 'next/server';
import { SubscriptionController } from '@/lib/controller';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest): Promise<NextResponse> {
  return SubscriptionController.handlePost(req);
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  // Check for stats query parameter
  const { searchParams } = new URL(req.url);
  if (searchParams.get('stats') === 'true') {
    return SubscriptionController.handleGetStats();
  }

  return SubscriptionController.handleGetAll();
}
