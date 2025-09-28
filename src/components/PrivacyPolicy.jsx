import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">プライバシーポリシー</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 mb-6">
          最終更新日: 2025年9月28日
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. はじめに</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            svg2css by eedamame（以下「当サービス」）では、ユーザーの皆様のプライバシーを尊重し、個人情報の保護に努めています。
            本プライバシーポリシーでは、当サービスがどのような情報を収集し、どのように使用するかについて説明します。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. 収集する情報</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 アップロードされるファイル</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            当サービスでは、SVGファイルの変換処理を行いますが、アップロードされたファイルはサーバーに保存されません。
            すべての処理はブラウザ内で実行され、ファイルの内容は変換後に自動的に削除されます。
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 アクセス情報</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            当サービスでは、Google Analyticsを使用してウェブサイトの利用状況を分析しています。
            これには以下の情報が含まれます：
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>IPアドレス（匿名化処理済み）</li>
            <li>ブラウザの種類とバージョン</li>
            <li>オペレーティングシステム</li>
            <li>アクセス日時</li>
            <li>参照元サイト</li>
            <li>ページビュー情報</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Cookie</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            当サービスでは、Google AnalyticsおよびGoogle AdSenseによってCookieが使用されます。
            Cookieは、ユーザーの利便性向上および広告の最適化のために利用されます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. 情報の利用目的</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            収集した情報は以下の目的で利用します：
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>サービスの提供および改善</li>
            <li>ウェブサイトの利用状況分析</li>
            <li>適切な広告の表示</li>
            <li>技術的な問題の解決</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. 第三者サービス</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Google Analytics</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            当サービスでは、Googleが提供するアクセス解析ツール「Google Analytics」を使用しています。
            Google Analyticsは、Cookieを使用してユーザーの行動に関する情報を収集します。
            詳細は<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Googleのプライバシーポリシー</a>をご確認ください。
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Google AdSense</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            当サービスでは、Googleが提供する広告配信サービス「Google AdSense」を使用しています。
            Google AdSenseは、Cookieを使用して適切な広告を表示します。
            詳細は<a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Google広告のプライバシーポリシー</a>をご確認ください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookieの管理</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            ユーザーはブラウザの設定により、Cookieの受け入れを拒否することができます。
            ただし、Cookieを無効にした場合、サービスの一部機能が利用できない場合があります。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. 個人情報の保護</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            当サービスでは、ユーザーの個人情報を適切に保護するため、合理的なセキュリティ対策を実施しています。
            また、アップロードされたSVGファイルはサーバーに保存されず、ブラウザ内でのみ処理されるため、
            ファイルの内容が第三者に漏洩するリスクを最小限に抑えています。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. プライバシーポリシーの変更</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            当サービスでは、必要に応じてプライバシーポリシーを変更する場合があります。
            変更時には、ウェブサイト上で告知いたします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. お問い合わせ</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            プライバシーポリシーに関するご質問やお問い合わせは、以下までご連絡ください：
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">
              <strong>お問い合わせ先:</strong> eedamameinfo@gmail.com
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;