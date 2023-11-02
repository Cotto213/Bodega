//utilizando alertas de sweet alert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

//function que enviara la alerta toast
export function SWTAlertToast(tipo, mensaje) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    //retornando alerta
    return (
        Toast.fire({
            icon: tipo,
            title: mensaje
        })
    )
}

//alertas para estados
export function SWTTopAlert(incono, mensaje) {
    return (
        Swal.fire({
            position: 'top-end',
            icon: incono,
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
        })
    )
}

//alerta para advertencias
export function SWRAlertAdvertencias(icono, titulo, texto, footer) {
    return (
        Swal.fire({
            icon: icono,
            title: titulo,
            text: texto,
            footer: footer
        })
    )
}

//creamos una alerta
export function SWTAlertQuestion() {
    return (
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    )
}

//crea una alerta que mostrara una carga de datos
export function SWTContador(bandera) {
    //creando una alerta para simular carga en pantalla
    const MySwal = withReactContent(Swal); // creando alerta

    let timerInterval;
    MySwal.fire({
        title: 'Cargando Informacion!',
        html: 'Cargando <b></b> ....',
        timer: bandera,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
                const content = Swal.getContent()
                if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                        b.textContent = Swal.getTimerLeft()
                    }
                }
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
}

//crea una alerta de espera
export function SWTEspera(titulo, texto, footer) {
    Swal.fire({
        icon: 'info',
        title: titulo,
        text: texto,
        footer: footer,
        showConfirmButton: false
    })
}

export function SWTLoadertext(text, NAME) {
    //creando una alerta para simular carga en pantalla
    const MySwal = withReactContent(Swal); // creando alerta

    let timerInterval;
    MySwal.fire({
      title: NAME,
      html: text,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              b.textContent = Swal.getTimerLeft()
            }
          }
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }

  export function SWTLoadertime(bandera, text, NAME) {
    //creando una alerta para simular carga en pantalla
    const MySwal = withReactContent(Swal); // creando alerta

    let timerInterval;
    MySwal.fire({
      title: NAME,
      timer: bandera,
      html: text,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              b.textContent = Swal.getTimerLeft()
            }
          }
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }