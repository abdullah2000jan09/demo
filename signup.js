var allinput=document.querySelectorAll("input")
var allselect=document.querySelectorAll("select")
var usergen;
function storethevalue()
{
    var firstname=allinput[0].value
    var surname=allinput[1].value
    var email=allinput[2].value
    var pass=allinput[3].value
    var date=allselect[0].value
    var month=allselect[1].value
    var year=allselect[2].value
    localStorage.setItem("fname",firstname)
    localStorage.setItem("sname",surname)
    localStorage.setItem("e&m",email)
    localStorage.setItem("pass",pass)
    localStorage.setItem("dd",date)
    localStorage.setItem("mm",month)
    localStorage.setItem("yy",year)
    sessionStorage.setItem("e&m",email)
    sessionStorage.setItem("pass",pass)
}
function gender(gen)
{
    usergen=gen
}



