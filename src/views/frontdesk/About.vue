<template>
  <div class="container-fluid pb-3">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-beige border-bottom">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-lightgrey"> 首頁 </router-link>
          </li>
          <li
            class="breadcrumb-item font-weight-bold text-infoCoffee active"
            aria-current="page"
          >
            聯絡我們
          </li>
        </ol>
      </nav>
      <div class="row contact py-5">
        <div class="col-md-6 col-12">
          <h2 class="text-left text-infoCoffee font-weight-bold pl-4 mb-2">
            湖前門市
            <i class="fas fa-store"></i>
          </h2>
          <p class="px-4 text-left h5">
            我們非常高興能聽到來自客戶的任何意見，歡迎隨時聯絡我們，詢問、訂購產品或提供寶貴建議！
          </p>
          <p class="px-4 text-left h5">
            營業時間： 週一至週六 09：00 AM ~ 19：00 PM
          </p>
          <p class="px-4 text-left h5">（ 週日無營業 ）</p>
          <div class="text-infoCoffee text-left message">
            <h4>
              聯絡地址
              <i class="fas fa-address-card"></i> ：新北市汐止區湖前街 20 號
            </h4>
            <h4>
              客服專線
              <i class="fas fa-phone"></i> ：02-2345-6666
            </h4>
            <h4>
              傳真號碼
              <i class="fas fa-fax"></i> ：02-3456-7777
            </h4>
          </div>
        </div>
        <div class="col-md-6 col-12 location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2148.881540731202!2d121.63102743411541!3d25.068884968974615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d534bf34aaef7%3A0x27a4f7d8346f9ae8!2zMjIx5paw5YyX5biC5rGQ5q2i5Y2A5rmW5YmN6KGXMjDomZ8!5e0!3m2!1szh-TW!2stw!4v1598987180205!5m2!1szh-TW!2stw"
            width="500"
            height="450"
            frameborder="0"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="contact-us bg-beige mb-5 pb-5">
      <div class="container">
        <h3 class="text-infoCoffee py-4 text-center">聯絡表單</h3>
        <form class="row justify-content-center">
          <div class="col-md-8 text-left">
            <div class="form-group">
              <label for="name">姓名*</label>
              <input
                type="text"
                id="name"
                name="姓名"
                class="form-control"
                placeholder="請輸入收件人姓名"
              />
            </div>
            <div class="form-group">
              <label for="tel">電話*</label>
              <input
                type="tel"
                id="tel"
                name="電話"
                class="form-control"
                placeholder="電話"
              />
            </div>
            <div class="form-group">
              <label for="email">電子信箱</label>
              <input
                type="email"
                id="email"
                name="信箱"
                class="form-control"
                placeholder="請輸入信箱"
              />
            </div>
            <div class="form-group">
              <label for="message">留言給我們*</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="3"
                class="form-control"
              >
              </textarea>
            </div>
            <div class="text-right">
              <button type="submit" class="btn btn-themeCoffee my-4">
                送出表單
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
body {
  background-color: #fefbf4;
}
.breadcrumb-item {
  a {
    text-decoration: none;
  }
}
.contact {
  .message {
    padding-left: 1.5rem;
    margin-top: 3rem;
  }
  p {
    line-height: 1.8;
  }
}
@media screen and (max-width: 1024px) {
  .contact {
    .message {
      padding-left: 55px;
      h4 {
        font-size: 20px;
      }
    }
  }
  iframe {
    width: 450px;
  }
}
@media screen and (max-width: 768px) {
  .contact {
    .message {
      margin-top: 25px;
      padding-left: 20px;
      padding-right: 10px;
      h4 {
        font-size: 18px;
      }
    }
  }
  iframe {
    width: 350px;
  }
}
@media screen and (max-width: 540px) {
  .location {
    margin-top: 50px;
    iframe {
      width: 450px;
    }
  }
}
@media screen and (max-width: 414px) {
  .location {
    iframe {
      width: 300px;
    }
  }
}
@media screen and (max-width: 320px) {
  .location {
    iframe {
      width: 250px;
    }
  }
}
@media screen and (max-width: 280px) {
  .location {
    iframe {
      width: 200px;
    }
  }
}
</style>
