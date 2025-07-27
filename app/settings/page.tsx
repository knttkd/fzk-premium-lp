'use client'

import PlusSettings from '@/components/PlusSettings'

export default function SettingsPage() {
  // デモ用のダミーデータ
  const demoProfile = {
    userId: 'demo_user_123',
    displayName: 'デモユーザー',
    pictureUrl: 'https://via.placeholder.com/100',
    statusMessage: ''
  }

  const demoUser = {
    id: 1,
    user_id: 'demo_user_123',
    display_name: 'デモユーザー',
    picture_url: 'https://via.placeholder.com/100',
    subscription_status: 'plus' as const,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }

  return <PlusSettings profile={demoProfile} user={demoUser} />
}