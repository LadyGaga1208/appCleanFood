import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Rating, Button } from 'react-native-elements';
import TMHeader from '../../components/Header';
import * as variables from '../../config/variables';

export default class ProductDetail extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TMHeader title="Product Detail" />
        <ScrollView style={{ flex: 1, padding: variables.Pad }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={{ uri: 'https://i.pinimg.com/564x/a7/ca/5c/a7ca5c0c50f610582bfda19d21086018.jpg' }}
              style={{
                width: '47%',
                height: 0.24 * variables.height,
              }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: variables.FONTSIZE.large, color: variables.COLOR.black, fontWeight: '500' }}>Maykyo hokk</Text>
              <Text style={{ color: variables.mainColor, fontSize: variables.FONTSIZE.large, fontWeight: '500' }}>50.000d/kg</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Rating
                  type="star"
                  readonly
                  startingValue={5}
                  imageSize={15}
                  style={{
                    marginTop: 2
                  }}
                />
                <Text style={{ color: 'gray', fontSize: 14, marginLeft: 2 }}>(12)</Text>
              </View>
              <Text style={{ color: variables.COLOR.black, marginTop: 5 }}>Số lượng đã bán 15kg</Text>
              <Button
                buttonStyle={{
                  width: '85%',
                  backgroundColor: variables.mainColor,
                  marginTop: 35
                }}
                title="Thêm vào giỏ"
              />
            </View>
          </View>
          <View style={{ marginTop: 10, backgroundColor: variables.backgroundColor, flex: 1, borderRadius: 10, padding: 10 }}>
            <Text>最新記事
  『八月のシンデレラナイン』第3話感想・・・ちょっと大事な所をこの回で話せよｗｗｗ　そして作画がもう・・野球アニメなのにスイング微妙やし
  『なんでここに先生が!? 』第3話感想・・・エロは重要だけどそれ抜きでもニヤニヤが止まらないぐらいできが良いラブコメの気がしてきた！！
  今期アニメ、海外の人気ランキングがでる！ 6位：賢者の孫、5位：勉強、4位：異世界かるてっと
  『Fairy gone フェアリーゴーン』第3話感想・・・出てくる新キャラはほぼスタンド持ち！ 　３話まできたけど盛り上がるシーンがないのが悲しい
  最近の小学生、お馬鹿ちゃんすぎてやばいｗｗｗ
  平成も終わるのに宮崎駿に続くアニメ監督、やっぱり現れない・・・令和に出てくるのか？
  【悲報】暴行被害者のNGT48・山口真帆さんが卒業発表　味方の二人も同時卒業!!　ＫＯＥＥＥＥＥＥＥ
  【サイン会】『五等分の花嫁』作者「花嫁は最初から決まっています、が　読者にバレたら変えるかも」←これマジかよ・・・・
  『けものフレンズ』のかばんちゃん、キュルカスに人気で負ける(´・ω・｀)
  任天堂信者さん、ファイナルファンタジーを遊んだ事すらなかった
  『冴えカノ劇場版、このすば劇場版、青ブタ劇場版』←興行収入どれくらい行くと思う？
  『けものフレンズ２』の細にぃ、アニポケからもプロデューサーを外されるｗｗｗｗｗｗ
  『五等分の花嫁』の三玖推しさん金持ちだったｗｗｗｗｗ
  【新3大ジャンプアニメはこれ！】ジャンプ編集長「未発表のアニメ化決定作品は複数ある！」「アニメ放送が終わったあと人気を維持するのが難しい」
  【悲報】外　歩　い　て　た　ら　命　が　危　な　い ！
  『けものフレンズ2』プロデューサーの細にぃ、ミュウツーの逆襲からはずされる・・・なにがあったのか
  【悲報】『艦これ』の2期のアニメＰＶ未だに公式サイトやツイッターで公開されない・・・・
  『響け！ユーフォニアム』原作の中古先輩はヤンレズのガチレズだった・・・これはLGBT作品やわ
  『コードギアス・ガンソード・プラネテス』を作った谷口悟朗監督と『けものフレンズ・ケムリクサ』を作った たつき監督ってどっちの方が凄いの？(´・ω・｀)
  【悲報】コナン作者「灰原、安室、世良はなんでこんな人気あるのかわからない」
  CoCo壱のバンドリコラボに茄子カレー　⇒　「オタクがナス食わねぇだろ」
  【何だと！？】日本さん、完全に中国に抜かれてしまう
  【悲報】ラブライバーさん、排水溝にドリンクを捨てまくる ⇒ 悪臭＆ハエがたかる事態に・・・
  ツイッター民が「キモヲタ＝性犯罪者予備軍」として叩いているフェミさんを一瞬で論破する
子連れ母親ファミレスで激怒「先にドリンクバーだけ頂戴」</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
