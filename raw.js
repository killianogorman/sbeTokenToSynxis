function getURLParams() {
    let url = new URL(document.location.href);
    var params = [];
    url.searchParams.forEach((value, key) => {
      params.push({ key, value });
    });
    return params;
  }
  function t(v) {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://be.synxis.com/";
    form.style.display = "none";
  
    let k = v.map((e) => {
      const element = document.createElement("input");
      element.type = "hidden";
      element.name = e.key;
      element.value = e.value;
      return element;
    });
  
    k.forEach((e) => {
      form.appendChild(e);
    });
    document.body.appendChild(form);
    console.log(`Redirecting to Sabre`)
    form.submit();
  }
  window.onload = () => {
    let values = getURLParams();
    t(values);
  };
  