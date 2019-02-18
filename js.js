let deadline = '2019-02-19';

    function getTimeRemaining(endtime){ //óçíàåì ïðîìåæóòîê âðåìåíè ì/ó äåäëàéí è òåêóùåé äàòîé
        let t = Date.parse(endtime) - Date.parse(new Date()), //ïîëó÷åíèå ìèëëèñåêóíä îò êîíå÷íîé äàòû è òåêóùåé
            seconds = Math.floor((t/1000) % 60),  // ïåðåâîä èç ìèëëèñåêóíä â ñåêóíäû
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
            
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
            
        };

    }
        
    function setClock(id, endtime){ // ôóíêöèÿ ñîçäàåò ðàçëè÷íûå ïåðåìåííûå(áåðåò ñî ñòðàíèöû)
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        function updateClock() {  //ïîëó÷àåò ðàçíèöó âî âðåìåíè è çàïèñûâàåì äàííûå
            let t = getTimeRemaining(endtime);
            if(t.hours<10){
                hours.textContent = '0'+t.hours;             
            }else{
                hours.textContent = t.hours;
            }
            if(t.minute<10){
                minutes.textContent = '0'+ t.minutes;
                
            }else{
                minutes.textContent = t.minutes;
            }
            if(t.seconds<10){
                seconds.textContent = '0'+ t.seconds;
                
            }else{
                seconds.textContent = t.seconds;
            }
            
            

            if(t.total <= 0){
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

            }
        }
    }    

    setClock('timer', deadline);
