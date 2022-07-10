$(document).ready(()=>{
    const sendRequest = (Name) => {
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://anime-facts.p.rapidapi.com/api/v1",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "2a789c0c2emshc6d028d6abecc1ap1e9f1ajsnc3833b267c17",
		"X-RapidAPI-Host": "anime-facts.p.rapidapi.com"
    }
};

$.get(settings,(response)=>{
    for(let i=0;i<12;i++){
        if(Name==response.data[i].anime_name){
            an_image=response.data[i].anime_img;
            console.log(an_image)
        }
         
    }
   $("#image_display").attr("src",an_image)

})
    }


    $("#form1").submit(function(e) {
        e.preventDefault();
        const Name=$("#anime-input").val();
        sendRequest(Name);
    })

});




