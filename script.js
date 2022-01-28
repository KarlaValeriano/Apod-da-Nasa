search()

function search(){
     var data = 
     document.getElementById ("date").value
    $.ajax({url:`https://api.nasa.gov/planetary/apod?api_key=Gu0MZYR5dc4VHP5VISzp9eQINX6AibiJsP8BR9Ai&date=${data}`,
    
        success: function(param) {
        $('#img').attr('src', param.url)
        $('#title').text( param.title)
        $('#explanation').text( param.explanation)
        $('#copyright').text( param.copyright);}})}
  
  