Moralis.initialize("PZWdajgiIchiww9uHhFmh810fN7hiPhznaShNKyg"),Moralis.serverURL="https://bsdybtwzd51i.moralishost.com:2053/server",init=async()=>{Window.web3=await Moralis.Web3.enable(),initUser()},initUser=async()=>{await Moralis.User.current()?(hiding(header),showing(headerAdmin)):(showing(header),hiding(headerAdmin))},login=async()=>{try{await Moralis.Web3.authenticate(),initUser()}catch(e){alert("you don't have metamsk in your browser, please download it from https://metamask.io/")}},hiding=e=>e.style.display="block",showing=e=>e.style.display="none";const header=document.getElementById("header"),headerAdmin=document.getElementById("header_admin"),connectBtn=document.getElementById("connectbtn");connectBtn.onclick=login,init();