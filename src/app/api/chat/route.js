export async function POST(request) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL,
        "X-Title": process.env.NEXT_PUBLIC_SITE_NAME,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "moonshotai/kimi-k2:free", // Using Kimi-K2 free model
        "messages": [
          {
            "role": "system",
            "content": `Anda adalah TelecomAI, asisten virtual yang ramah dan ahli di bidang telekomunikasi.
Anda membantu siswa SMK Telekomunikasi memahami dunia telekomunikasi dengan cara yang menyenangkan dan mudah dipahami.`
          },
          ...conversationHistory,
          {
            "role": "user",
            "content": message
          }
        ],
        "max_tokens": 300,
        "temperature": 0.7,
        "top_p": 0.9,
        "stream": false
      })
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    const data = await response.json();

    return Response.json({
      success: true,
      message: data.choices[0].message.content,
      usage: data.usage
    });

  } catch (error) {
    console.error('OpenRouter API error:', error);

    return Response.json({
      success: false,
      error: 'Koneksi jaringan bermasalah. Sistem telekomunikasi kami sedang dalam maintenance sementara.',
      fallback: true
    }, { status: 500 });
  }
}
