$(function(){
    let kmBox = $('#km')
    let minBox = $('#min')
    let calcBtn = $('#calcfare')
    let fareDiv = $('#fare')
    let rateBtn = $('#getrates')
    let rateDiv = $('#rates')

    calcBtn.click(function(){
        $.post('/calcfare',{
            km: kmBox.val(),
            min: minBox.val()
        }, function(data){
            fareDiv.text('Fare: ' + data.fare)
        })
    })

    rateBtn.click(function(){
        $.get('/rate', function (data){
            let prettyRateData = `
            Fixed Fare: Rs. ${data.fixed} for ${data.minKm} KM || 
            Fare (Distance): Rs. ${data.perKm} / KM || 
            Fare (Waiting): Rs. ${data.perMin} / min (after first ${data.freeMin} min)
            `
            rateDiv.text(prettyRateData)
        })
    })
})