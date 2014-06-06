muchIpsum = {
  fillerText: [],
  textDiv: $('#text'),
  wowBtn: $('#btn'),
  
  init : function() {
    muchIpsum.setupFillerTextArray();
    
    muchIpsum.wowBtn.click(function() {
      textDiv.html("<p style='text-align: left;'>" + muchIpsum.fillerText[0] + "</p>");
    });
  },
  
  setupFillerTextArray : function() {
    muchIpsum.fillerText.push("Much ipsum very dolor sit amet, very adipiscing elit wow. Such hendrerit so eu diam laoreet volutpat. Such vulputate euismod wow. Fusce ornare odio orci. So consectetur mi very luctus sollicitudin. Such vulputate wow dui eget auctor. Etiam gravida tempor dui, dignissim very wow tristique at. Cras feugiat dui nec libero facilisis wow. Pellentesque ac elit et very placerat aliquam in id dolor. Much et felis ut quam mattis sagittis ac quis nulla. Such neque very, sodales id neque vel, dictum auctor leo. Such suscipit nisl at purus posuere pellentesque. Much sit amet felis in wow venenatis convallis bibendveryum very risus. Such erat voluverytpat.");
    muchIpsum.fillerText.push("Such malesuada very purus a convallis. Much dictum, such vel vehicula very, tellus eros tincidunt justo, ac placerat metus erat in ante. Such nec mauris a risus very vehicula. Much very at lacus ac blandit wow. Nunc et eros lacinia, much neque eget, very leo. Wow ante ipsum primis in faucibus orci much et ultrices very cubilia Curae; Nulla much ipsum ac nisi tempor, id very eros vehicula.");
    muchIpsum.fillerText.push("Much dictum very scelerisque. Suspendisse potenti. Much a nunc in est commodo aliquet. So sit amet semper quam. Such rhoncus very nisi, sed wow nunc iaculis eget. Much tempor massa sit amet nibh facilisis feugiat. Much iaculis wow velit. Morbi tempus sollicitudin est, id laoreet diam euismod et. Much quis faucibus wow.");
    muchIpsum.fillerText.push("Much in accumsan est. Vestibulum lacinia sagittis vulputate. Much eget tempus leo. Such ipsum very dolor sit amet, consectetur adipiscing elit. Nullam dapibus libero non felis lacinia, vitae rutrum metus luctus. Much velit elit, facilisis in vehicula non, congue a risus. So suscipit elit risus, ac varius very rhoncus sit amet. Such facilisis very consectetur. Much eget ornare mi. Donec nec facilisis erat. Nam id quam egveryet risus feugiat commodo eu so odio. Much volutpat so tellus. Aenean mi odio, wow volutpat in tristique ac, venenatis quis tortor. Integer malesuada enim vel eleifend wow sollicitudin.");
    muchIpsum.fillerText.push("So vitae tempus nulla, wow such auctor ultrices sem. Much eu metus sed ante very vestibulum condimentum nec sit amet augue. Wow. Such lorem velit, tempor in vestibulum much sit amet, molestie non nunc. Such sapien massa, much ultrices a justo et, tincidunt bibendum nisl. Morbi venenatis tincidunt suscipit. So sollicitudin velit metus, quis fermentum felis blandit at. Quisque ut iaculis velit, much in congue erat. Nullam ultricies ante sed eros rutrum pulvinar. Such laoreet nisi eu vestibulum fermentum wow. Such feugiat sem sed consectetur tempus. So rutrum interdum lorem quis ornare. So tincidunt massa odio, sp nec feugiat dui volutpat ac. Such luctus sapien massa. Wow in nisl et dui sodales pretium eu eu erat. So hendrerit vehicula urna, much nec ipsum interdum ut. So et nulla sit amet such enim tempor tempus sed quis libero wow.");
  },
};
