window.addEventListener("load",()=>{

    switched.addEventListener('change',()=>{
        circle.classList.toggle('dispn');
        digital.classList.toggle('dispn');
        
    })

    setInterval(() => {
        d = new Date();
        htime= d.getHours();
        mtime= d.getMinutes();
        stime= d.getSeconds();
        years=d.getFullYear();
        date=d.getDate();
        month=d.getMonth()+1;
        hrotation = 30*htime + mtime/2;
        mrotation = 6*mtime;
        srotation = 6*stime;
    
        hour.style.transform = `rotate(${hrotation}deg)`;
        min.style.transform = `rotate(${mrotation}deg)`;
        sec.style.transform = `rotate(${srotation}deg)`;
    
        dhour.innerHTML=htime + " <br> hours ";
        dmin.innerHTML=mtime+ " <br> minutes ";
        dsec.innerHTML=stime + " <br> seconds ";
        ddate.innerHTML=date;
        dmonth.innerHTML=month;
        dyear.innerHTML=years;
        
        
    
    },1000);
})
