import liff from '@line/liff'

export interface LiffProfile {
  userId: string
  displayName: string
  pictureUrl?: string
  statusMessage?: string
}

export const initializeLiff = async (): Promise<void> => {
  try {
    const liffId = process.env.NEXT_PUBLIC_LIFF_ID
    if (!liffId) {
      throw new Error('LIFF IDが設定されていません')
    }

    await liff.init({ liffId })
    
    if (!liff.isLoggedIn()) {
      liff.login()
    }
  } catch (error) {
    console.error('LIFF初期化エラー:', error)
    throw error
  }
}

export const getLiffProfile = async (): Promise<LiffProfile> => {
  try {
    if (!liff.isLoggedIn()) {
      throw new Error('ログインしていません')
    }

    const profile = await liff.getProfile()
    return {
      userId: profile.userId,
      displayName: profile.displayName,
      pictureUrl: profile.pictureUrl,
      statusMessage: profile.statusMessage,
    }
  } catch (error) {
    console.error('プロフィール取得エラー:', error)
    throw error
  }
}

export const closeLiff = () => {
  liff.closeWindow()
}

export const isInLineApp = (): boolean => {
  return liff.isInClient()
}
