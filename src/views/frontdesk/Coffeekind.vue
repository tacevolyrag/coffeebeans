<template>
  <div class="bg-beige pb-5">
    <div class="coffee-origin mb-5 container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-beige border-bottom">
        <li class="breadcrumb-item">
          <router-link to="/" class="text-lightgrey "
        style="text-decoration: none;">首頁</router-link>
        </li>
        <li class="breadcrumb-item font-weight-bold active text-coffee2"
        aria-current="page">咖啡豆種類</li>
      </ol>
    </nav>
      <h4 class="font-weight-bold text-coffee2">單品咖啡以及綜合咖啡的差異</h4>
      <div class="row origin">
        <div class="col-md-6">
          <h5 class="font-weight-bold my-4">單品咖啡 ( Single Origin )</h5>
          <p class="text-left px-5">
            單品簡稱 S.O，強調的是 "Origin" 這個概念，也就是源頭。單品一詞連結的是地理位置，用
            來準確地形容咖啡的原產地或國家，展現該產區或國家的獨到風味。例如：牙買加藍山咖啡豆、夏威夷科納咖啡豆等。
          </p>
        </div>
        <div class="col-md-6">
          <h5 class="font-weight-bold my-4">綜合咖啡 ( Blend )</h5>
          <p class="text-left px-5">是指調配不同產區的咖啡豆，塑造出豐富而口感不同的咖啡風味。例如：義式咖啡、曼巴 ( 曼特寧+巴西 ) 等。</p>
        </div>
      </div>
    </div>
    <div>
      <div class="container coffeekind">
        <h4 class="mb-4 text-coffee2 font-weight-bold">咖啡豆種類</h4>
        <div class="row align-items-center">
          <div class="col-md-6">
              <!-- left -->
              <h5 class="mt-3">巴拿馬(瑰夏藝妓咖啡)</h5>
              <p>巴拿馬咖啡曾經沉寂了好一陣子，但隨著近年來帶有濃郁花香的瑰夏（藝妓）咖啡備受矚目，
                該國精品咖啡莊園在當地享有合理的勞動法規及工資保障，所生產的咖啡明亮中<strong>帶有濃烈果香及花香調</strong>。</p>
              <h5 class="mt-3">墨西哥(墨西哥咖啡)</h5>
              <p>以<strong>口感輕盈溫和聞名</strong>，有<strong>天然甜味</strong>，適合深焙作為義式濃縮咖啡的基底，但因為精品咖啡並非當地生產主力，
                  所以好豆子並不好找。</p>
              <h5 class="mt-3">巴西(山多斯咖啡)</h5>
              <p>巴西是世界上最大的咖啡生產國，種類的咖啡佔全球三分之一消費量，不但有龐大的商業咖啡產量，
                  亦有優質的高級單品咖啡。頂級巴西咖啡豆最有名的是它的勁道、細緻的風味差異及平衡感，
                  其中最出名的就是山多斯咖啡，它的<strong>口感香醇</strong>，中性，它可以直接煮，或和其他種類的咖啡豆相混成綜合咖啡，
                  也是很好的選擇適合用來作成綜合豆，調和出溫和、乾淨、酸度低的口感，有時還帶點<strong>牛奶巧克力、櫻桃及檫樹風味</strong>。</p>
          </div>
          <div class="col-md-6">
              <div class="coffeekind-image coffeekind-image1 mt-3"></div>
          </div>
        </div>
        <div class="row align-items-center">
            <div class="col-md-6 ">
                <div class="coffeekind-image coffeekind-image2"></div>
            </div>
            <div class="col-md-6">
                <h5 class="mt-3">哥倫比亞(哥倫比亞咖啡豆)</h5>
              <p>這個產量僅次於巴西的第二大咖啡工業國， 所栽培的咖啡豆皆為阿拉比卡，<strong>味道相當濃郁，品質、價格也很穩定</strong>，
                  煎培過的咖啡豆，更顯的大且漂亮。 從低級品至高級品都能生產，其中有些是世上少有的好貨，
                  哥倫比亞咖啡口味相當純淨均衡，醇厚飽滿，風味繽紛豐富，甚至可以嚐到熱帶水果調的蔗糖甜味。</p>
              <h5 class="mt-3">衣索匹亞 (耶加雪菲)(西達摩卡)</h5>
              <p>衣索比亞是阿拉比卡種（Arabica）的原產地在咖啡界佔有傳奇之位。通常，
                  以水洗法處理的衣索比亞咖啡<strong>口感潔淨，帶有花香</strong>；日曬豆則較<strong>厚重，風味豐富複雜，極具特色</strong>。
                  許多咖啡愛好者對於衣索比亞咖啡情有獨鍾，尤其得知某些豆子就產自世界上最古老的咖啡樹種時，
                  更大大增加了衣索比亞產地在其心目中的公信力，這裏有著名的衣索匹亞摩卡，它有著與<strong>葡萄酒相似的酸味</strong>，
                  香濃，且產量頗豐。我們所熟知的耶加雪菲 Yirgacheffe、西達摩 Sidamo 也都產至此地。</p>
              <h5 class="mt-3">肯亞(肯亞AA)</h5>
              <p>肯亞咖啡以<strong>酸度</strong>出名，在品質及業界作法方面亦享有良好聲譽。當地最出色的咖啡，風味多重繽紛，
                  濃郁果香中透著莓果調性；<strong>口感深刻厚實，香氣十足，某些品種甚至還帶有甜味及酒香</strong>，
                  而肯亞咖啡豆大多採用水洗式處理法，咖啡豆幾乎吸收了整個咖啡櫻桃的精華，<strong>有著微酸，濃稠的香味</strong>，
                  是很受歐洲人的喜愛，尤其在英國，肯亞咖啡更超越了哥斯大黎加的咖啡，成為最受歡迎的咖啡。</p>
            </div>
        </div>
        <div class="row mb-5 pb-3">
            <div class="col-md-6">
                <h5 class="mt-3">夏威夷(可娜咖啡)</h5>
              <p>夏威夷的可娜咖啡幾乎可說是所謂「好」咖啡的代表，雖然大家對此還是有些爭議。此地擁有得天獨厚的環境條件，
                  包括肥沃的火山土壤、日照充足、午後遮蔭以及頻繁的陣雨，相當有利咖啡生長。可娜咖啡風味溫和純淨，平衡順口，
                  真正上等的豆子喝起來<strong>濃郁芳醇帶有果香</strong>，有時甚至帶點<strong>香草味</strong>。</p>
              <h5 class="mt-3">牙買加(藍山咖啡)</h5>
              <p>你可能聽過牙買加藍山咖啡，它被譽為世界極品，甚至超越夏威夷的可娜豆。牙買加咖啡<strong>口感溫潤厚實，
                風味複雜而平衡</strong>，有人覺得愉悅迷人，有人嫌平淡單調，必須親自品嚐才能斷定純正牙買加藍山咖啡的美譽及高貴身價是否當之無愧。</p>
              <h5 class="mt-3">印尼(黃金曼特寧)</h5>
              <p>說到印尼的咖啡，一定不能漏了蘇門答臘的黃金曼特寧，它<strong>香濃的口感，微酸性的口味，苦中帶甘，甘中又有酸的餘香</strong>，久久不散。</p>
            </div>
            <div class="col-md-6">
                <div class="coffeekind-image coffeekind-image3"></div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
  .coffeekind{
      h5{
          color: #632100;
          font-weight: bold;
          padding: 10px 0;
          border-bottom: 2px solid #632100;
      }
      p{
          padding: 5px 28px;
          line-height: 1.7;
      }
  }
  .coffee-origin{
      .origin{
          border: 2px solid #2c3e50;
          margin: 0 5px;
      }
      h4{
        //   border-bottom: 2px solid #2c3e50;
          padding: 10px 0 ;
      }
      h5{
          border-bottom: 2px solid #2c3e50;
          padding: 10px 0;
      }
      p{
          padding: 5px 0px;
          line-height: 1.8;
      }
  }
  .coffeekind-image{
      min-height: 500px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
  }
  .coffeekind-image1{
      background-image: url('https://blog.coffeemart.com.tw/wp-content/uploads/2019/05/57446538_2265417590170593_932038504873984000_o.jpg');;
  }
  .coffeekind-image2{
      background-image: url('https://images.unsplash.com/photo-1549883498-9c1eb45b3cae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
      margin-top: 35px;
  }
  .coffeekind-image3{
      background-image: url('https://images.unsplash.com/photo-1509785307050-d4066910ec1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
      margin-top: 25px;
  }
</style>
