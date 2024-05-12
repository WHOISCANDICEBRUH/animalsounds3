function startClassification(){
    navigator.mediaDevices.getUserMedia({audi0: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vGahNU867/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) +1;
        random_number_g = Math.floor(Math.random()*255) +1;
        random_number_b = Math.floor(Math.random()*255) +1;
    
        document.getElementById("result_label").innerHTML = 'I can hear- '+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy- '+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('image');

        if(results[0].label == "Alligator") {
            image.src = 'alligators.jpg';
        }else if (results[0].label == "cat"){
            image.src = 'cat.jpeg';
        } 
        else if (results[0].label == "dog"){
            image.src = 'dog.jpeg';
        } 
        else if (results[0].label == "wolf"){
            image.src = 'cat.jpeg';
        } 
        else if (results[0].label == "Background Noise"){
            image.src = 'ear.png';
        } 
    }
}