import React, { Component } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Rating, Button } from 'react-native-elements';
import Modal from 'react-native-modal';

import TMHeader from '../../components/Header';
import * as variables from '../../config/variables';
import * as imgs from '../../assets/images';

export default class ProductDetail extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    isModalVisible: null,
  };

  _toggleModalStore = () => {
    console.log('hehe');
    this.setState({ isModalVisible: 1 });
  }
  _toggleModalCart = () => {
    console.log('hehe');
    this.setState({ isModalVisible: 2 });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TMHeader title="Product Detail" />
        <ScrollView style={{ flex: 1, padding: variables.Pad }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={{ uri: 'https://i.pinimg.com/564x/a7/ca/5c/a7ca5c0c50f610582bfda19d21086018.jpg' }}
              style={styles.imgProduct}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: variables.FONTSIZE.large, color: variables.COLOR.black, fontWeight: '500' }}>Maykyo hokk</Text>
              <Text style={{ color: variables.mainColor, fontSize: variables.FONTSIZE.large, fontWeight: '500' }}>50.000d/kg</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Image source={imgs.store} style={{ width: 20, height: 20 }} />
                <Text style={{ fontSize: 14, color: variables.COLOR.orange, marginLeft: 5 }}>TOMITA Trần Duy Hưng</Text>
              </View>
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
                  marginTop: 15
                }}
                title="Thêm vào giỏ"
                onPress={() => this._toggleModalStore()}
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
        <Modal isVisible={this.state.isModalVisible === 1} style={{ margin: 0, justifyContent: 'flex-end' }}>
          <View style={{ backgroundColor: variables.COLOR.white, height: '60%', padding: 10 }}>
            <Text style={{ color: 'black', fontSize: 18 }}>Chọn cửa hàng của TOMITA!</Text>
            <TouchableOpacity
              style={{ backgroundColor: variables.backgroundColor, padding: 5, marginTop: 10, borderRadius: 10 }}
              onPress={this._toggleModalCart}
            >
              <View style={{ flexDirection: 'row' }}>
                <Image source={imgs.place} style={{ width: 20, height: 20, tintColor: variables.COLOR.fb }} />
                <Text style={{ marginLeft: 5 }}>125 Trần Duy Hưng, Cầu giấy, Hà nội</Text>
              </View>
              <Text style={{ marginTop: 5, marginLeft: 10 }}>Số lương: 45 kg</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ isModalVisible: 0 })}
              style={{
                backgroundColor: variables.mainColor,
                width: 40,
                height: 40,
                elevation: 2,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                position: 'absolute',
                bottom: 20,
                right: 20
              }}
            >
              <Image source={imgs.cancel} style={{ width: 18, height: 18, tintColor: '#fff' }} />
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal isVisible={this.state.isModalVisible === 2} style={{ margin: 0, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: 250, height: 150, backgroundColor: '#fff', padding: 10, borderRadius: 10 }}>
            <Text style={{ color: '#444', fontSize: 16 }}>Số lượng: 24 kg</Text>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: 10 }}>
              <TouchableOpacity style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={imgs.plus} style={{ width: 24, height: 24, tintColor: variables.mainColor }} />
              </TouchableOpacity>
              <TextInput style={{ borderWidth: 0.5, padding: 0, borderColor: 'gray', width: 70, marginHorizontal: 10 }} />
              <TouchableOpacity style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={imgs.minus} style={{ width: 24, height: 24, tintColor: variables.mainColor }} />
              </TouchableOpacity>

            </View>

            <Button
              buttonStyle={{
                width: '70%',
                backgroundColor: variables.mainColor,
                marginTop: 15,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '15%'
              }}
              title="Thêm vào giỏ"
              onPress={() => this._toggleModalStore()}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgProduct: {
    width: 140,
    height: 180,
  }
});
