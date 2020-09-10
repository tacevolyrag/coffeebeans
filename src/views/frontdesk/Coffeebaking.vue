<template>
  <div class="container pb-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-beige border-bottom">
        <li class="breadcrumb-item">
          <router-link to="/" class="text-lightgrey "
        style="text-decoration: none;">首頁</router-link>
        </li>
        <li class="breadcrumb-item font-weight-bold active text-coffee2"
        aria-current="page">咖啡八階段</li>
      </ol>
    </nav>
    <section class="row coffee-definition align-items-center">
      <div class="col-md-6">
        <h4 class="text-coffee2 font-weight-bold">烘焙的定義</h4>
        <p class="h5">
          所謂咖啡烘焙（coffee roasting）是指通過對生豆的加熱，促使咖啡豆內外部發生一系列物理和化學反應，
          並在此過程中生成咖啡的酸，苦，甘等多種味道，形成醇度和色調，將生豆轉化為深褐色原豆的過程。
        </p>
      </div>
      <div class="col-md-6 mt-5">
        <div class="baking-image baking-image-3"></div>
      </div>
    </section>
    <h4 class="text-coffee2 font-weight-bold mt-5">烘培八階段</h4>
    <div class="bakingCoffee py-5 row">
      <section class="col-md-6">
        <div class="baking-text">
          <h4>淺培</h4>
          <h5>Light Roast</h5>
          <p>
            所有烘焙階段中最淺的烘焙度，咖啡豆的表面呈淡淡的肉桂色，
            其口
            <br />味和香味均不足，一般用在檢驗上，很少用來品嘗。
          </p>
          <h5>Cinnamon Roast</h5>
          <p>
            外觀上呈現肉桂色，臭青味已除，香味尚可，酸度強，咖啡味淡，
            市
            <br />面上較少販賣。
          </p>
          <h4>中培</h4>
          <h5>Medium Roast</h5>
          <p>
            外觀上呈現棕色，除了酸味外，苦味亦出現了，口感不錯。
            此時酸重
            <br />於苦、醇度適中，又稱美式烘焙。
          </p>
          <h5>High Roast</h5>
          <p>
            屬於中度微深烘焙，表面已出現少許濃茶色，苦味亦變強了。
            咖啡味
            <br />道酸中帶苦，香氣及風味皆佳，是市面上販賣最多的烘焙豆方式。
          </p>
          <h5>City Roast</h5>
          <p>
            外觀上呈現咖啡棕色，最標準的烘焙度，苦味和酸味達到平衡，
            使咖
            <br />啡產生多層次感，讓原本喜好中度烘焙的美國人改變口味，轉向喜歡
            <br />上它。
          </p>
          <h4>深培</h4>
          <h5>Full City Roast</h5>
          <p>
            外觀上呈現深棕色，顏色變得相當深，表面出現油亮，苦味較酸味強
            <br />，
            適合曼特寧、夏威夷可那等特徵強烈的咖啡豆。
          </p>
          <h5>French Roast</h5>
          <p>
            屬於深度烘焙，外觀上呈現黑色仍帶一絲茶色，呈濃茶色帶黑，酸味
            <br />已感覺不出，
            在歐洲尤其以法國最為流行，因脂肪已滲透至表面，帶
            <br />有獨特香味，很適合冰咖啡，維也納咖啡。
          </p>
          <h5>Italian Roast</h5>
          <p>
            將咖啡豆烘焙到全黑，表面油光，接近焦化，此時只有苦味，味道單
            <br />純有時帶有煙燻味。
            適合果肉厚、酸味強的高地咖啡豆。
          </p>
        </div>
      </section>
      <div class="col-md-6 mb-5 pb-3">
        <table class="table table-bordered baking-table bg-beige">
          <thead class="text-coffee2 h5">
            <tr>
              <th>淺培</th>
              <th>中培</th>
              <th>深培</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Light Roast</td>
              <td>Medium Roast</td>
              <td>Full City Roast</td>
            </tr>
            <tr>
              <td>Cinnamon Roast</td>
              <td>High Roast</td>
              <td>French Roast</td>
            </tr>
            <tr>
              <td></td>
              <td>City Roast</td>
              <td>Italian Roast</td>
            </tr>
          </tbody>
        </table>
        <div class="baking-image baking-image-1"></div>
        <div class="baking-image baking-image-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
body{
  background-color: #fefbf4;
}
.coffee-definition{
  h4{
    padding-bottom: 10px;
    border-bottom: 2px solid #632100;
  }
  p{
    padding: 20px 20px;
    line-height: 1.8;
  }
  .baking-image {
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
  .baking-image-3{
    background-image: url("https://images.unsplash.com/photo-1541469406036-71229832e06e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
  }
}
.bakingCoffee {
  .baking-text {
    h4 {
      font-weight: bold;
      border: 1px solid #2a1a07;
      background-color: #fefbf4;
      padding: 5px 0;
    }
    h5 {
      color: #632100;
    }
    p {
      padding: 5px 10px;
    }
  }
  .baking-image {
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
  .baking-image-1 {
    background-image: url("https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
    margin-bottom: 10px;
  }
  .baking-image-2 {
    background-image: url("https://images.unsplash.com/photo-1514066637891-498034f5a154?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
  }
}
</style>
