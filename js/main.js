// Функция первой модалки в навбаре
function openModalOneNavbar ()
{
  var modalOneNavbar = document.getElementById( 'modal-one-navbar' );
  modalOneNavbar.style.display = 'block';
}

function closeModalOneNavbar ()
{
  var modalOneNavbar = document.getElementById( 'modal-one-navbar' );
  modalOneNavbar.style.display = 'none';
}

// Функция второй модалки в навбаре
function openModalTwoNavbar ()
{
  var modalNavbar = document.getElementById( 'modal-two-navbar' );
  modalNavbar.style.display = 'block';
}

function closeModalTwoNavbar ()
{
  var modalNavbar = document.getElementById( 'modal-two-navbar' );
  modalNavbar.style.display = 'none';
}

// Функция третей модалки в навбаре
function openModalThreeNavbar ()
{
  var modalNavbar = document.getElementById( 'modal-three-navbar' );
  modalNavbar.style.display = 'block';
}

function closeModalThreeNavbar ()
{
  var modalNavbar = document.getElementById( 'modal-three-navbar' );
  modalNavbar.style.display = 'none';
}

// Функция четвертой модалки в навбаре
function openModalFourNavbar ()
{
  var modalNavbar = document.getElementById( 'modal-four-navbar' );
  modalNavbar.style.display = 'block';
}

function closeModalFourNavbar ()
{
  var modalNavbar = document.getElementById( 'modal-four-navbar' );
  modalNavbar.style.display = 'none';
}

// Функция пятой модалки в навбаре
function openModalFiveNavbar ()
{
  var modalNavbar = document.getElementById( 'modal-five-navbar' );
  modalNavbar.style.display = 'block';
}

function closeModalFiveNavbar ()
{
  var modalNavbar = document.getElementById( 'modal-five-navbar' );
  modalNavbar.style.display = 'none';
}

// Функция шеста модалки в навбаре
function openModalSixNavbar ()
{
  var modalNavbar = document.getElementById( 'modal-six-navbar' );
  modalNavbar.style.display = 'block';
}

function closeModalSixNavbar ()
{
  var modalNavbar = document.getElementById( 'modal-six-navbar' );
  modalNavbar.style.display = 'none';
}

// Функция седьмая модалки в навбаре
function openModalSevenNavbar ()
{
  var modalNavbar = document.getElementById( 'modal-seven-navbar' );
  modalNavbar.style.display = 'block';
}

function closeModalSevenNavbar ()
{
  var modalNavbar = document.getElementById( 'modal-seven-navbar' );
  modalNavbar.style.display = 'none';
}

// Функция восьмая модалки в навбаре
function openModalEighthNavbar ()
{
  var modalNavbar = document.getElementById( 'modal-eighth-navbar' );
  modalNavbar.style.display = 'block';
}

function closeModalEighthNavbar ()
{
  var modalNavbar = document.getElementById( 'modal-eighth-navbar' );
  modalNavbar.style.display = 'none';
}

// Функция девятая модалки в навбаре
function openModalNineNavbar ()
{
  var modalNavbar = document.getElementById( 'modal-nine-navbar' );
  modalNavbar.style.display = 'block';
}

function closeModalNineNavbar ()
{
  var modalNavbar = document.getElementById( 'modal-nine-navbar' );
  modalNavbar.style.display = 'none';
}
// Функция десятая модалки в навбаре
function openModalTenNavbar ()
{
  var modalNavbar = document.getElementById( 'modal-ten-navbar' );
  modalNavbar.style.display = 'block';
}

function closeModalTenNavbar ()
{
  var modalNavbar = document.getElementById( 'modal-ten-navbar' );
  modalNavbar.style.display = 'none';
}

// Функция для открытие модального окна ахрива приказов
function openModalOneArchive ()
{
  var modalArchive = document.getElementById( 'modal-one-archive' );
  modalArchive.style.display = 'block';
}

function closeModalOneArchive ()
{
  var modalArchive = document.getElementById( 'modal-one-archive' );
  modalArchive.style.display = 'none';
}





const modalAvatar = document.getElementById( 'modal-avatar' );

function openModalAvatar ()
{
  modalAvatar.style.display = 'block';
}

function closeModalAvatar ()
{
  modalAvatar.style.display = 'none';
}



// Тут будет функция для определение значения кредитного плеча
// Получаем элементы
const rangeInput = document.getElementById( 'rangeInput' );
const rangeLabelsPoints = document.querySelectorAll( '#rangeListPoints span' );
const rangeLabelsValues = document.querySelectorAll( '#rangeListValues li' );

// Инициализация: добавляем класс active к первой точке и первому числу
rangeLabelsPoints[ 0 ].classList.add( 'active' );
rangeLabelsValues[ 0 ].classList.add( 'active' );

// Обработчик события изменения значения ползунка
rangeInput.addEventListener( 'input', function ()
{
  const currentValue = parseInt( this.value );

  // Удаляем класс active и previous со всех точек и чисел
  rangeLabelsPoints.forEach( span =>
  {
    span.classList.remove( 'active', 'previous' );
  } );
  rangeLabelsValues.forEach( li => li.classList.remove( 'active', 'previous' ) );

  // Добавляем класс active к текущей точке и числу
  rangeLabelsPoints[ currentValue - 1 ].classList.add( 'active' );
  rangeLabelsValues[ currentValue - 1 ].classList.add( 'active' );

  // Добавляем класс previous ко всем предыдущим точкам и числам
  for ( let i = 0; i < currentValue - 1; i++ )
  {
    rangeLabelsPoints[ i ].classList.add( 'previous' );
    rangeLabelsValues[ i ].classList.add( 'previous' );
  }
} );


