function submitForm() {

  const fullName = document.getElementById('title1').value;
  const address = document.getElementById('title2').value;
  const phoneNumber = document.getElementById('title3').value;
  const email = document.getElementById('title4').value;
  const website = document.getElementById('title5').value;

  const htmlPercentage = document.getElementById('html_percentage').value;
  const cssPercentage = document.getElementById('css_percentage').value;
  const phpPercentage = document.getElementById('php_percentage').value;
  const javaPercentage = document.getElementById('java_percentage').value;
  const pythonPercentage = document.getElementById('python_percentage').value;
  const aboutme = document.getElementById('content_aboutme').value;

  const year = document.getElementById('year').value;
  const year1 = document.getElementById('year1').value;
  const year2 = document.getElementById('year2').value;
  const aboutmee = document.getElementById('aboutmee').value;
  const edu = document.getElementById('edu').value;
  const cicak = document.getElementById('cicak').value;
   const kambing = document.getElementById('kambing').value;
    const gajah = document.getElementById('gajah').value;


  document.getElementById('content_title1').innerText = fullName;
  document.getElementById('content_title2').innerText = address;
  document.getElementById('content_title3').innerText = phoneNumber;
  document.getElementById('content_title4').innerText = email;
  document.getElementById('content_title5').innerText = website;

  document.getElementById('content_year').innerText = year;
  document.getElementById('content_year1').innerText = year1;
  document.getElementById('content_year2').innerText = year2;
 document.getElementById('content_aboutmee').innerText = aboutmee;
 document.getElementById('content_edu').innerText = edu;
 document.getElementById('content_cicak').innerText = cicak;
 document.getElementById('content_kambing').innerText = kambing;
 document.getElementById('content_gajah').innerText = gajah;


  updateSkillPercentage('html_percentage', { value: htmlPercentage });
  updateSkillPercentage('css_percentage', { value: cssPercentage });
  updateSkillPercentage('php_percentage', { value: phpPercentage });
  updateSkillPercentage('java_percentage', { value: javaPercentage });
  updateSkillPercentage('python_percentage', { value: pythonPercentage });

  document.getElementById('title1').readOnly = true;
  document.getElementById('title2').readOnly = true;
  document.getElementById('title3').readOnly = true;
  document.getElementById('title4').readOnly = true;
  document.getElementById('title5').readOnly = true;

  document.getElementById('html_percentage').readOnly = true;
  document.getElementById('css_percentage').readOnly = true;
  document.getElementById('php_percentage').readOnly = true;
  document.getElementById('java_percentage').readOnly = true;
  document.getElementById('python_percentage').readOnly = true;

  document.getElementById('facebook_content').readOnly = true;
  document.getElementById('twitter_content').readOnly = true;
  document.getElementById('youtube_content').readOnly = true;
  document.getElementById('linkedin_content').readOnly = true;

///hide text box
  hideTextBox('title1');
  hideTextBox('title2');
  hideTextBox('title3');
  hideTextBox('title4');
  hideTextBox('title5');
  hideTextBox('year');
  hideTextBox('year1');
  hideTextBox('year2');
  hideTextBox('aboutmee');
  hideTextBox('edu');
  hideTextBox('cicak');
  hideTextBox('kambing');
  hideTextBox('gajah');


}


function hideTextBox(elementId) {
  document.getElementById(elementId).style.display = 'none';
  document.getElementById('content_' + elementId).style.display = 'block';
  document.getElementById('button_id').style.display = 'none'; 
  document.querySelector('.resume').style.display = 'flex'; 
  document.getElementById('content_title1').style.fontSize = '24px'; 
  document.getElementById('content_title1').style.fontWeight = 'bold';
  document.getElementById('content_title1').style.color = 'white';

  var educationTextareaList = document.querySelectorAll('.resume_education textarea');
  educationTextareaList.forEach(function(textarea) {
    textarea.readOnly = true;
  });

  var workTextareaList = document.querySelectorAll('.resume_work textarea');
  workTextareaList.forEach(function(textarea) {
    textarea.readOnly = true;
  });

}

function selectImage() {
    document.getElementById('imageInput').click();
}

function displayImage(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    
    reader.onload = function(event) {
        var image = new Image();
        image.src = event.target.result;

        var imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = '';
        imageContainer.appendChild(image);

        image.onload = function() {
            imageContainer.style.height = this.height + 'px';
        };
    };
    reader.readAsDataURL(file);
}


//persentasenya

function updateSkillPercentage(inputId, inputElement) {


    var percentage = inputElement.value;

    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
      alert("Please enter a valid percentage between 0 and 100.");
      return;
    }

    var skillProgress = document.querySelector('#' + inputId).closest('li').querySelector('.skill_progress span');
    skillProgress.style.width = percentage + '%';
  }

  function selectImage() {
    document.getElementById('imageInput').click();
  }

  function displayImage(event) {
    var imageContainer = document.getElementById('imageContainer');
    var fileInput = event.target;
    var file = fileInput.files[0];

    if (file) {
      var reader = new FileReader();
      reader.onload = function (e) {
        imageContainer.style.backgroundImage = 'url(' + e.target.result + ')';
        imageContainer.style.backgroundSize = 'cover';
        imageContainer.style.backgroundPosition = 'center';
      };
      reader.readAsDataURL(file);
    }
  }