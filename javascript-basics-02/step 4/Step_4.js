function resetForm(){
       a = confirm('Are you sure you want to reset?')
        if (a) {
      document.querySelector('form').reset();
    }
}