jQuery('#formulario').validate({
    rules:{
      name : "required",
      apellido : "required",
      _subject : "required",
      email : {
        required : true,
        email : true
      },
      mensaje : "required",
    },
    messages : {
      name : "Por favor, escriba su nombre",
      apellido : "Por favor ingrese su apellido",
      _subject: "Por favor ingrese el asunto",
      email : {
        required  : "Por favor ingrese su correo electrónico",
        email : "Por favor introduzca un correo electrónico válido",
      },
      mensaje : "Por favor ingrese un mensaje",
    },
    submitHandler : function(form){
      form.submit();
    }
  });

  