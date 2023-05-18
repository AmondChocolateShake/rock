function gamBamBo(na, you) {
    var rule = ['ga', 'ba', 'bo'];
    //가위는 바위한테 짐
    //바위는 보한테 짐
    //보는 바위한테 짐
    if (na === 'ga') {
        if (you === 'ba')
            return 'na 패배';
        else if (you === 'bo')
            return 'na 승리';
    }
}
gamBamBo('ga', 'ba');
