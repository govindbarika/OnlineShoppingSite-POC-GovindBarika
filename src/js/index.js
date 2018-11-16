import "../../node_modules/bootstrap/scss/bootstrap.scss"

import "../scss/base.scss"
import "../scss/layout.scss"
import "../scss/module.scss"

import "../../node_modules/bootstrap/dist/js/bootstrap"
import $ from "jquery"
window.$ = $

$.getJSON("db.json", function(data) {
    console.log("Loading Data form JSON -", data.ShoppingBag[0].Name);
    var productDetails = document.getElementById('productDetails');
    productDetails.innerHTML = "";
    data.ShoppingBag.forEach(citem => {
        productDetails.innerHTML += `
                <div class="item">
                    <div class="product-image">
                        <img class="cImg1" src="` + citem.Image1 + `" alt="Placholder" class="product-frame" width="300" height="300"/>
                        <img class="cImg2" src="` + citem.Image2 + `" alt="placeholder" style="display: none;" width="300" height="300"/>
                    </div>
                    <div class="product-details">
                        <h4>  <span class="item-quantity"> ` + citem.Name + ` </h4>                        
                        <p class="prod"> Product Code - ` + citem.ProdCode + ` </p>
                        <p class="col"> Color-` + citem.Color + `</p>
                        <div class="remove">
                            <button class="cart_edit">Edit</button>
                            <button>Remove</button>
                            <button>Save For Later</button>
                        </div>  
                    </div>
                
                    <div class="sidepro">
                        <div> <p class="siz"> ` + citem.Size + ` </p> </div>
                        <div class="quantity">
                            <input type="number" value="1" min="1" class="quantity-field">
                        </div>
                        <div class="price"><p class="pric"> &#36;` + citem.Price + ` </p></div>
                    </div> 
                </div> <hr> `
    })




    productDetails.innerHTML += `<div class="row">
    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <h6 style="padding-top: 50px;"
       class="sub">Need help <br>or have questions?</h6><br>
      <h6>Call Customer Service at<br> 1-800-555-5555</h6>
      <h6>
        <u>Chat with one of <br>our stylists</u>
      </h6>
      <h6>
        <u>See return <br> & exchange policy</u>
      </h6>
    </div>
    <div /*style="padding-right: 220px;"*/ class="col-xs-8 col-sm-8 col-md-8 col-lg-8 ">
      <div class="row ">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h5 style="padding-top: 50px;">ENTER PROMOTION CODE <br>OR GIFT CARD</h5>
        </div>
        <div style="padding-top: 50px;" class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
          <input type="text" class="input-control">
          <button type="button" class="btn btn-default btn-apply">APPLY</button>
        </div>
      </div>
      <hr class="h-line">
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div class="sub"><b>SUBTOTAL</b></div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
          <div class="sub">$70.00</div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div class="sub"><b>PROMOTION CODE JF10 APPLIED</b></div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
          <div class="sub">-$5.00</div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div class="sub"><b>ESTIMATED SHIPPING*</b></div>
          <p>You qualify for free shipping <br>because your order is over $50*</p>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
          <div class="sub">Free</div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h4><b>ESTIMATED TOTAL</b></h4>
          <p>Tax will be applied during checkout</p>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
          <h3>$65.00</h3>
        </div>
      </div>
      <hr class="h-line">
    </div>

</div>

<div /*style="padding-right: 200px;"*/  class="">
    <div class="row text-center">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h5 class="text-right ">
                <u style="margin-right: 15px;" class="shop-txt">CONTINUE SHOPPING</u>
                <button type="button" class="btn btn-primary btn-apply btn-fix pull-right">CHECKOUT</button>
            </h5>        
        </div>
    </div> 
</div>
<div /*style="padding-right: 200px;"*/  class="col-xs-12">
    <p class="text-right terms"> <span class="glyphicon glyphicon-lock"></span><img class="logoImgClass" src="src/images/secureKey.jpg" alt="Secure lock image"> Secure checkout. Shopping is always safe & secure</p>
</div>  `
    $(".cart_edit").click(function(e) {
        console.log("Click Cart - " + $(e.currentTarget).parent().parent().parent().find('.siz').text());
        $("#itemView .modal-body #lbl_mName").text($(e.currentTarget).parent().parent().find('p').text());
        $("#itemView .modal-body #prodName").text($(e.currentTarget).parent().parent().find('h1').text());
        $("#itemView .modal-body #prodSize").text($(e.currentTarget).parent().parent().parent().find('.sidepro .siz').text());
        $("#itemView .modal-body #prodPrice").text($(e.currentTarget).parent().parent().parent().find('.pric').text());
        $("#itemView .modal-body .im1").attr("src", $(e.currentTarget).parent().parent().parent().find('.product-image .cImg1').attr("src"));
        $("#itemView .modal-body .im2").attr("src", $(e.currentTarget).parent().parent().parent().find('.product-image .cImg2').attr("src"));
        $("#itemView").modal('show');
    });
});



$(document).ready(function() {
    console.log("show model on click of edit button")
    $("#itemview").modal('show');

});
