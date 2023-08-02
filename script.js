function wyborMiejsc() {
  location.href = "miejsca.html";
}
function zliczanieMiejsc() {
  let wybraneMiejscaParter = document.getElementsByName("checkParter");
  liczbaMiejscParter = 0;
  for (let i = 0; i < wybraneMiejscaParter.length; i++) {
    if (wybraneMiejscaParter[i].checked === true) {
      liczbaMiejscParter++;
    }
  }

  let wybraneMiejscaPietro = document.getElementsByName("checkPietro");
  liczbaMiejscPietro = 0;
  for (let i = 0; i < wybraneMiejscaPietro.length; i++) {
    if (wybraneMiejscaPietro[i].checked === true) {
      liczbaMiejscPietro++;
    }
  }

  if (liczbaMiejscParter == 0 && liczbaMiejscPietro == 0) {
    document.getElementById(
      "error"
    ).innerHTML = `Aby dokonać rezerwacji należy wybrać conajmniej 1 miejsce!`;

    $(".czyZaznaczonoMiejsca").click(function () {
      $(".popupBoxError").css("display", "block");
      $(".popupBox1").css("display", "none");
      $(".sala").css("filter", "blur(10px");
    });

    $(".btnError").click(function () {
      $(".popupBoxError").css("display", "none");
      $(".sala").css("filter", "blur(0px");
    });
  } else if (liczbaMiejscParter > 0 || liczbaMiejscPietro > 0) {
    document.getElementById(
      "zliczParter"
    ).innerHTML = `Zaznaczono ${liczbaMiejscParter} miejsc`;
    document.getElementById(
      "zliczPietro"
    ).innerHTML = `Zaznaczono ${liczbaMiejscPietro} miejsc`;

    $(".czyZaznaczonoMiejsca").click(function () {
      $(".popupBox1").css("display", "block");
      $(".popupBoxError").css("display", "none");
      $(".sala").css("filter", "blur(10px");
    });

    $(".btn1").click(function () {
      $(".popupBox1").css("display", "none");
      $(".sala").css("filter", "blur(0px");
    });

    $(".btn2").click(function () {
      let iloscParterUlgowy = Number(
        document.forms.biletyDol.biletyUlgoweParter.value
      );
      let iloscParterNormalny = liczbaMiejscParter - iloscParterUlgowy;
      let iloscPietroUlgowy = Number(
        document.forms.biletyGora.biletyUlgowePietro.value
      );
      let iloscPietroNormalny = liczbaMiejscPietro - iloscPietroUlgowy;

      if (
        iloscParterUlgowy > liczbaMiejscParter ||
        iloscPietroUlgowy > liczbaMiejscPietro
      ) {
        document.getElementById(
          "error"
        ).innerHTML = `Wprowadzono zbyt dużą ilość biletów! `;
        $(".popupBox1").css("display", "block");
        $(".sala").css("filter", "blur(20px)");
        $(".popupBox1").css("filter", "blur(10px)");
        $(".popupBoxError").css("display", "block");
        $(".popupBox2").css("display", "none");

        $(".btnError").click(function () {
          $(".popupBoxError").css("display", "none");
          $(".sala").css("filter", "blur(10px");
          $(".popupBox1").css("filter", "blur(0px)");
          $(".popupBox2").css("display", "none");
        });
      } else {
        $(".popupBox1").css("display", "none");
        $(".popupBoxError").css("display", "none");
        $(".popupBox2").css("display", "block");

        document.getElementById(
          "biletyUlgoweParter"
        ).innerHTML = `Ilość biletów ulgowych: ${iloscParterUlgowy}`;
        document.getElementById(
          "biletyNormalneParter"
        ).innerHTML = `Ilość biletów normalnych: ${iloscParterNormalny}`;
        document.getElementById(
          "biletyUlgowePietro"
        ).innerHTML = `Ilość biletów ulgowych: ${iloscPietroUlgowy}`;
        document.getElementById(
          "biletyNormalnePietro"
        ).innerHTML = `Ilość biletów normalnych: ${iloscPietroNormalny}`;

        const cenaParterUlgowy = 10;
        const cenaParterNormalny = 15;
        const cenaPietroUlgowy = 20;
        const cenaPietroNormalny = 25;

        let suma =
          iloscParterUlgowy * cenaParterUlgowy +
          iloscParterNormalny * cenaParterNormalny +
          iloscPietroUlgowy * cenaPietroUlgowy +
          iloscPietroNormalny * cenaPietroNormalny;
        document.getElementById("cena").innerHTML = `Do zapłaty: ${suma}zł.`;

        $(".btn3").click(function () {
          $(".popupBoxError").css("display", "none");
          $(".sala").css("filter", "blur(0px");
          $(".popupBox2").css("display", "none");
          $(".popupBox1").css("display", "none");
        });
        $(".btn4").click(function () {
          location.href = "index.html";
        });
      }
    });
  }
}
