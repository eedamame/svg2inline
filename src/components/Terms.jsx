import React from 'react';

function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">利用規約</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 mb-6">
          最終更新日: 2025年9月28日
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. 利用規約について</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            svg2css by eedamame（以下「当サービス」）をご利用いただく前に、以下の利用規約（以下「本規約」）をお読みください。
            本サービスを利用することにより、お客様は本規約に同意したものとみなします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. サービスの概要</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            当サービスは、SVGファイルをCSS data URLに変換するためのWebツールです。
            ブラウザ上でファイル変換処理を行い、変換されたコードをクリップボードにコピーする機能を提供します。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. 利用条件</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 利用資格</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            本サービスは、どなたでも無料でご利用いただけます。
            ただし、以下に該当する方の利用をお断りします：
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>反社会的勢力に該当する方</li>
            <li>本規約に違反する可能性が高いと判断される方</li>
            <li>当サービスの運営を妨害する行為を行う方</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 禁止事項</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            本サービスの利用において、以下の行為を禁止します：
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>違法または不正な目的での利用</li>
            <li>他者の知的財産権を侵害するファイルのアップロード</li>
            <li>ウイルス、マルウェア等の悪意のあるコードを含むファイルのアップロード</li>
            <li>過度にサーバーに負荷をかける行為</li>
            <li>本サービスの運営を妨害する行為</li>
            <li>その他、当運営者が不適切と判断する行為</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. ファイルの取り扱い</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            アップロードされたSVGファイルは、ブラウザ内でのみ処理され、サーバーには保存されません。
            変換処理完了後、ファイルの内容は自動的に削除されます。
            ただし、アップロードされるファイルの内容については、利用者の責任において管理してください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. 知的財産権</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            本サービスに関する知的財産権は、運営者に帰属します。
            アップロードされたファイルおよび変換後のコードの知的財産権は、それぞれの権利者に帰属します。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. 免責事項</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            運営者は、以下について一切の責任を負いません：
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>本サービスの利用により生じたいかなる損害</li>
            <li>変換結果の正確性、完全性</li>
            <li>本サービスの中断、停止により生じた損害</li>
            <li>第三者による不正アクセスやデータの改ざん等により生じた損害</li>
            <li>その他、本サービスに関連して生じたあらゆる損害</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. サービスの変更・停止</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            運営者は、事前の通知なく本サービスの内容を変更、または提供を停止する場合があります。
            これらの変更・停止により利用者に生じた損害について、運営者は一切責任を負いません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. 利用規約の変更</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            運営者は、必要に応じて本規約を変更する場合があります。
            変更後の規約は、本サイト上に掲載した時点で効力を生じるものとします。
            本規約変更後も本サービスをご利用いただく場合は、変更後の規約に同意したものとみなします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. 準拠法・管轄裁判所</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            本規約は、日本法に準拠し、解釈されるものとします。
            本サービスに関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. お問い合わせ</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            本規約に関するご質問やお問い合わせは、以下までご連絡ください：
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

export default Terms;