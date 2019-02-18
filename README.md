
Таймер обратного отсчета(часы, минуты, секунды)

Пример верстки в HTML  

				<div class="timer-numbers" id="timer">
					<span class="hours">18</span>
					<span>:</span>
					<span class="minutes">20</span>
					<span>:</span>
					<span class="seconds">11</span>
				</div>

Что нужно поправить для своего кода:

	Переменная deadline - дата окончания отсчета.
	
	setClock('timer', deadline);  - в вызове функции необходимо проставить свое имя id из див блока.
	
Также если классы единиц времени в верстке будут называться по другому, в функции setClock  в вызове через querySelector необходимо поменять на ваши классы, вот тут:


            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),			
				

