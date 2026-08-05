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

const modalExtended = document.getElementById( 'modal-extended' );

function openModalExtended ()
{
  modalExtended.style.display = 'block';
}

function closeModalExtended ()
{
  modalExtended.style.display = 'none';
}

const modalExtendedTwo = document.getElementById( 'modal-extended-two' );

function openModalExtendedTwo ()
{
  modalExtendedTwo.style.display = 'block';
}

function closeModalExtendedTwo ()
{
  modalExtendedTwo.style.display = 'none';
}


const modalCash = document.getElementById( 'modal-сash' );

function openModalCash ()
{
  modalCash.style.display = 'block';
}

function closeModalCash ()
{
  modalCash.style.display = 'none';
}

const modalDepo = document.getElementById( 'modal-depo' );

function openModalDepo ()
{
  modalDepo.style.display = 'block';
}

function closeModalDepo ()
{
  modalDepo.style.display = 'none';
}




// Тут будет функция для определение значения кредитного плеча
// Получаем элементы
// const rangeInput = document.getElementById( 'rangeInput' );
// const rangeLabelsPoints = document.querySelectorAll( '#rangeListPoints span' );
// const rangeLabelsValues = document.querySelectorAll( '#rangeListValues li' );

// Инициализация: добавляем класс active к первой точке и первому числу
// rangeLabelsPoints[ 0 ].classList.add( 'active' );
// rangeLabelsValues[ 0 ].classList.add( 'active' );

// Обработчик события изменения значения ползунка
// rangeInput.addEventListener( 'input', function ()
// {
//   const currentValue = parseInt( this.value );

//   rangeLabelsPoints.forEach( span =>
//   {
//     span.classList.remove( 'active', 'previous' );
//   } );
//   rangeLabelsValues.forEach( li => li.classList.remove( 'active', 'previous' ) );

//   rangeLabelsPoints[ currentValue - 1 ].classList.add( 'active' );
//   rangeLabelsValues[ currentValue - 1 ].classList.add( 'active' );

//   for ( let i = 0; i < currentValue - 1; i++ )
//   {
//     rangeLabelsPoints[ i ].classList.add( 'previous' );
//     rangeLabelsValues[ i ].classList.add( 'previous' );
//   }
// } );


// кастомный select option в купить продать

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName( "custom-select" );
l = x.length;
for ( i = 0; i < l; i++ )
{
  selElmnt = x[ i ].getElementsByTagName( "select" )[ 0 ];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement( "DIV" );
  a.setAttribute( "class", "select-selected" );
  a.innerHTML = selElmnt.options[ selElmnt.selectedIndex ].innerHTML;
  x[ i ].appendChild( a );
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement( "DIV" );
  b.setAttribute( "class", "select-items select-hide" );
  for ( j = 1; j < ll; j++ )
  {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement( "DIV" );
    c.innerHTML = selElmnt.options[ j ].innerHTML;
    c.addEventListener( "click", function ( e )
    {
      /* When an item is clicked, update the original select box,
      and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName( "select" )[ 0 ];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for ( i = 0; i < sl; i++ )
      {
        if ( s.options[ i ].innerHTML == this.innerHTML )
        {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName( "same-as-selected" );
          yl = y.length;
          for ( k = 0; k < yl; k++ )
          {
            y[ k ].removeAttribute( "class" );
          }
          this.setAttribute( "class", "same-as-selected" );
          break;
        }
      }
      h.click();
    } );
    b.appendChild( c );
  }
  x[ i ].appendChild( b );
  a.addEventListener( "click", function ( e )
  {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect( this );
    this.nextSibling.classList.toggle( "select-hide" );
    this.classList.toggle( "select-arrow-active" );
  } );
}

function closeAllSelect ( elmnt )
{
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName( "select-items" );
  y = document.getElementsByClassName( "select-selected" );
  xl = x.length;
  yl = y.length;
  for ( i = 0; i < yl; i++ )
  {
    if ( elmnt == y[ i ] )
    {
      arrNo.push( i )
    } else
    {
      y[ i ].classList.remove( "select-arrow-active" );
    }
  }
  for ( i = 0; i < xl; i++ )
  {
    if ( arrNo.indexOf( i ) )
    {
      x[ i ].classList.add( "select-hide" );
    }
  }
}