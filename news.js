console.log('This is my index js file');;
let fetchbtn1 = document.getElementById('fetchbtn1');
let fetchbtn2 = document.getElementById('fetchbtn2');
let fetchbtn3 = document.getElementById('fetchbtn3');
fetchbtn1.addEventListener('click', buttonClickHandler1);
fetchbtn2.addEventListener('click', buttonClickHandler2);
fetchbtn3.addEventListener('click', buttonClickHandler3);


function buttonClickHandler1() {

  let source = 'bbc-news';
  let apiKey = '734d5b592f5f44f4952a8145c689b588';


  //create a get request

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
  xhr.onload = function () {
    if (this.status == 200) {
      let obj = JSON.parse(this.responseText);
      let articles = obj.articles;
      let str = "";
      let newsaccordion = document.getElementById('newsaccordion');
      let x = 1;
      for (news in articles) {

        // console.log(news);
        console.log(articles[news]);
        //poplate
        str += ` <div class="accordion-item">
        <h2 class="accordion-header" id="heading${news}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${news}"
             aria-expanded="true" aria-controls="collapse${news}">
             <b>Breaking News ${x} : </b> 
             \u00A0\u00A0\u00A0\u00A0${articles[news].title}
          </button>
        </h2>
      <div id="collapse${news}" class="accordion-collapse collapse" aria-labelledby="heading${news}"
           data-bs-parent="#newsaccordion">
           <div class="accordion-body">${articles[news].content}. <a = href = "${articles[news].url}" target = "_balnk">Read more here</a></div>
       </div>
    </div>`;
        x++;
      }

      newsaccordion.innerHTML = str;

    }
    else {
      console.log("Sorry some error occured");
    }
  }
  xhr.send();
}



function buttonClickHandler2() {

  let source = 'the-times-of-india';
  let apiKey = '734d5b592f5f44f4952a8145c689b588';


  //create a get request

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
  xhr.onload = function () {
    if (this.status == 200) {
      let obj = JSON.parse(this.responseText);
      let articles = obj.articles;
      let str = "";
      let newsaccordion = document.getElementById('newsaccordion');
      let x = 1;
      for (news in articles) {

        // console.log(news);
        console.log(articles[news]);
        //poplate
        str += ` <div class="accordion-item">
        <h2 class="accordion-header" id="heading${news}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${news}"
             aria-expanded="true" aria-controls="collapse${news}">
             <b>Breaking News ${x} : </b> 
             \u00A0\u00A0\u00A0\u00A0${articles[news].title}
          </button>
        </h2>
      <div id="collapse${news}" class="accordion-collapse collapse" aria-labelledby="heading${news}"
           data-bs-parent="#newsaccordion">
           <div class="accordion-body">${articles[news].content}. <a = href = "${articles[news].url}" target = "_balnk">Read more here</a></div>
       </div>
    </div>`;
        x++;
      }

      newsaccordion.innerHTML = str;

    }
    else {
      console.log("Sorry some error occured");
    }
  }
  xhr.send();
}



function buttonClickHandler3() {

  let source = 'mtv-news';
  let apiKey = '734d5b592f5f44f4952a8145c689b588';


  //create a get request

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
  xhr.onload = function () {
    if (this.status == 200) {
      let obj = JSON.parse(this.responseText);
      let articles = obj.articles;
      let str = "";
      let newsaccordion = document.getElementById('newsaccordion');
      let x = 1;
      for (news in articles) {

        // console.log(news);
        console.log(articles[news]);
        //poplate
        str += ` <div class="accordion-item">
        <h2 class="accordion-header" id="heading${news}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${news}"
             aria-expanded="true" aria-controls="collapse${news}">
             <b>Breaking News ${x} : </b> 
             \u00A0\u00A0\u00A0\u00A0${articles[news].title}
          </button>
        </h2>
      <div id="collapse${news}" class="accordion-collapse collapse" aria-labelledby="heading${news}"
           data-bs-parent="#newsaccordion">
           <div class="accordion-body">${articles[news].content}. <a = href = "${articles[news].url}" target = "_balnk">Read more here</a></div>
       </div>
    </div>`;
        x++;
      }

      newsaccordion.innerHTML = str;

    }
    else {
      console.log("Sorry some error occured");
    }
  }
  xhr.send();
}

function changeimg(z)
{
    var newpic;
    if(z==1)
    {
    newpic = "https://i.dlpng.com/static/png/375636_preview.png";
    }
    if(z==2)
    {
     newpic ="https://www.logolynx.com/images/logolynx/dc/dce46fbc5f9d1678ba688a0126a27c0c.jpeg";
    }
    if(z==3)
    {
        newpic="https://iconape.com/wp-content/png_logo_vector/mtv-news-logo.png";
    }
    document.getElementById("image1").src=newpic;
}
