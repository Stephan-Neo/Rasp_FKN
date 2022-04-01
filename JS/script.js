// Emoji

const emoji_for_groups = new Map([
    ['Главная страница', ''],

    ['СМБ-101-0-01', '🧙🏻‍♂️'],
    ['ССБ-101-0-01', '😭'],
    ['СБС-001-0-01', '🤡'],
    ['СБС-002-0-01', '💩'],
    ['СББ-001-0-01', '🧢'],
    ['СИБ-101-0-01', '🚽👷‍♂️'],
    ['СБС-801-0-01', '💻'],
    ['СБС-901-0-01', '👨🏼‍🔧'],
])

const emoji_for_teachers = new Map([
    ['Кабанов А.Н', '&#128124'],
    ['Горева Е.Г', '😐'],
    ['Лаптев А.А', '&#128565'],
    ['Красникова А.В', '&#128208'],
    ['Гетте А.В', '&#128131'],
    ['Богаченко Н.Ф', '&#129464'],
    ['Болдовская Т.Е', '&#127750'],
    ['Стародубцев И.А', '&#128187'],
    ['Бояринцева Е.И', '&#129319'],
    ['Федорова Е.И', '&#128520'],
    ['Деревянченко Ю.И', '&#129299'],
    ['Авдеенко А.С', '&#129304'],
    ['Минина Н.В', '&#127982'],
])

// Emoji

let screen_width = window.screen.width;

$(document).ready(function () {

    $('.header__burger').click(function () {
        $('.header__burger, .header__menu').toggleClass('active');
        $('#content').toggleClass('lock');
    });

    if(screen_width <= 767){
        $('.header__link').each(function (){
            $(this).click(function () {
                $(this).next('ul').toggleClass('no-drop drop');
                $('.drop_menu').not($(this).next('ul')).removeClass('drop');
                $('.drop_menu').not($(this).next('ul')).addClass('no-drop');
            })
        })
    }

    

    
    
    // $('#p_course_1').click(function () {
    //     if($(`#ul_course_2`).hasClass("drop") && $('#ul_course_1').hasClass("no-drop")){
    //         $('#ul_course_2').toggleClass('drop no-drop');
    //     }
    //     if($(`#ul_course_3`).hasClass("drop") && $('#ul_course_1').hasClass("no-drop")){
    //         $('#ul_course_3').toggleClass('drop no-drop');
    //     }
    //     if($(`#ul_course_4`).hasClass("drop") && $('#ul_course_1').hasClass("no-drop")){
    //         $('#ul_course_4').toggleClass('drop no-drop');
    //     }
    //     $(`#ul_course_1`).toggleClass('no-drop drop');
    // });
    // $('#p_course_2').click(function () {
    //     if($(`#ul_course_1`).hasClass("drop") && $('#ul_course_2').hasClass("no-drop")){
    //         $('#ul_course_1').toggleClass('drop no-drop');
    //     }
    //     if($(`#ul_course_3`).hasClass("drop") && $('#ul_course_2').hasClass("no-drop")){
    //         $('#ul_course_3').toggleClass('drop no-drop');
    //     }
    //     if($(`#ul_course_4`).hasClass("drop") && $('#ul_course_2').hasClass("no-drop")){
    //         $('#ul_course_4').toggleClass('drop no-drop');
    //     }
    //     $(`#ul_course_2`).toggleClass('no-drop drop');
    // });
    // $('#p_course_3').click(function () {
    //     if($(`#ul_course_1`).hasClass("drop") && $('#ul_course_3').hasClass("no-drop")){
    //         $('#ul_course_1').toggleClass('drop no-drop');
    //     }
    //     if($(`#ul_course_2`).hasClass("drop") && $('#ul_course_3').hasClass("no-drop")){
    //         $('#ul_course_2').toggleClass('drop no-drop');
    //     }
    //     if($(`#ul_course_4`).hasClass("drop") && $('#ul_course_3').hasClass("no-drop")){
    //         $('#ul_course_4').toggleClass('drop no-drop');
    //     }
    //     $(`#ul_course_3`).toggleClass('no-drop drop');
    // });
    // $('#p_course_4').click(function () {
    //     if($(`#ul_course_1`).hasClass("drop") && $('#ul_course_4').hasClass("no-drop")){
    //         $('#ul_course_1').toggleClass('drop no-drop');
    //     }
    //     if($(`#ul_course_2`).hasClass("drop") && $('#ul_course_4').hasClass("no-drop")){
    //         $('#ul_course_2').toggleClass('drop no-drop');
    //     }
    //     if($(`#ul_course_3`).hasClass("drop") && $('#ul_course_4').hasClass("no-drop")){
    //         $('#ul_course_3').toggleClass('drop no-drop');
    //     }
    //     $(`#ul_course_4`).toggleClass('no-drop drop');
    //     // $('.header__list, #p_course_4').animate({scrollTop:0},500);
    // });

    $('.header a').click(function(){
        $('.header__burger, .header__menu').removeClass('active');
    })


    //  AJAX

    let hash = window.location.hash.substr(1);
    let href = $('.header__list li a').each(function(){
        let href = $(this).attr('href');
        function show_title() {
            // ! Эмоджи преподователей
            $(".lesson__teacher").each(function(i){
                let name_teacher = $(this).text();
                let emoji_for_t = emoji_for_teachers.get(name_teacher);
                if(emoji_for_t !== undefined){
                    $(this).html(name_teacher + " " + emoji_for_t);
                }
            })
            // ! Эмоджи преподователей
            let title = $('.title_chart span').html();
            let emoji_for_g = emoji_for_groups.get(title);
            if(emoji_for_g !== undefined){
                $('.title_chart span').html(title + ' ' + emoji_for_g);
                $('title').html(title + ' ' + emoji_for_g);
            }else{
                $('title').html(title);
            }
            // ! Time
            let start_date = new Date(2022, 1, 7);
            let while_date = new Date(2022, 1, 7);
            let now_date = new Date()
            let different_date = Math.ceil((now_date - while_date) / 86400000);
            let now_week = Math.ceil(different_date / 7);
            while_date.setDate(while_date.getDate() + (now_week - 1) * 7 );
            let d = while_date.toLocaleDateString();
            $('.now_week__number').html(now_week);
            $(".chart__element .date").each(function(i){
                $(this).html(d);
                while_date.setDate(while_date.getDate() + 1);
                d = while_date.toLocaleDateString();
            })
            $('.left_arrow').click(function (){
                number_week = $('.now_week__number').html();
                if(number_week > 1){
                    $('.now_week__number').html(Number(number_week) - 1).fadeIn();
                    $(".chart__element .date").each(function(i){
                        let date = $(this).html().split('.');
                        date = date[2] + '-' + date[1] + '-' + date[0]
                        let this_date = new Date(date);
                        this_date.setDate(this_date.getDate() - 7);
                        $(this).html((this_date.toLocaleDateString()));
                    })
                }
                    
                // !Even-Odd week
            
                $('.lesson').each(function(){
                    
                    if($('.now_week__number').html() % 2 === 0){
                        if($(this).hasClass('beByOddWeek')){
                            $(this).addClass('drop_lesson')
                        }
                        if($(this).hasClass('beByEvenWeek')){
                            $(this).removeClass('drop_lesson')
                        }
                    }else{
                        if($(this).hasClass('beByOddWeek')){
                            $(this).removeClass('drop_lesson')
                        }
                        if($(this).hasClass('beByEvenWeek')){
                            $(this).addClass('drop_lesson')
                        }
                    }
                    // С какой по какую неделю существует
                    let fullClassName = $(this).attr('class').split(' ');
                    let beWeeks = fullClassName[1];
                    let n_week = $('.now_week__number').html();
                    beWeeks = beWeeks.split('-');
                    let start_week = beWeeks[0];
                    let end_week = beWeeks[1];
                    if(Number(n_week) < Number(start_week) || Number(n_week) > Number(end_week)){
                        $(this).addClass('drop_lesson_on_gap');
                    }else{
                        $(this).removeClass('drop_lesson_on_gap');
                    }
                    // С какой по какую неделю существует
                    
                })
        
                // !Even-Odd week
            })
            $('.right_arrow').click(function (){
                number_week = $('.now_week__number').html();
                if(number_week < 19){
                    $('.now_week__number').html(Number(number_week) + 1);
                    $(".chart__element .date").each(function(i){
                        let date = $(this).html().split('.');
                        date = date[2] + '-' + date[1] + '-' + date[0]
                        let this_date = new Date(date);
                        this_date.setDate(this_date.getDate() + 7);
                        $(this).html((this_date.toLocaleDateString()));
                    })
                }
                // !Even-Odd week
            
                $('.lesson').each(function(){
                    if($('.now_week__number').html() % 2 === 0){
                        if($(this).hasClass('beByOddWeek')){
                            $(this).addClass('drop_lesson')
                        }
                        if($(this).hasClass('beByEvenWeek')){
                            $(this).removeClass('drop_lesson')
                        }
                    }else{
                        if($(this).hasClass('beByOddWeek')){
                            $(this).removeClass('drop_lesson')
                        }
                        if($(this).hasClass('beByEvenWeek')){
                            $(this).addClass('drop_lesson')
                        }
                    }
                    // С какой по какую неделю существует
                    let fullClassName = $(this).attr('class').split(' ');
                    let beWeeks = fullClassName[1];
                    let n_week = $('.now_week__number').html();
                    beWeeks = beWeeks.split('-');
                    let start_week = beWeeks[0];
                    let end_week = beWeeks[1];
                    if(Number(n_week) < Number(start_week) || Number(n_week) > Number(end_week)){
                        $(this).addClass('drop_lesson_on_gap');
                    }else{
                        $(this).removeClass('drop_lesson_on_gap');
                    }
                    // С какой по какую неделю существует
                })
        
                // !Even-Odd week
            })
            // ! Time


            // !Even-Odd week
           
            $('.lesson').each(function(){
                if($('.now_week__number').html() % 2 === 0){
                    if($(this).hasClass('beByOddWeek')){
                        $(this).addClass('drop_lesson')
                    }
                    if($(this).hasClass('beByEvenWeek')){
                        $(this).removeClass('drop_lesson')
                    }
                }else{
                    if($(this).hasClass('beByOddWeek')){
                        $(this).removeClass('drop_lesson')
                    }
                    if($(this).hasClass('beByEvenWeek')){
                        $(this).addClass('drop_lesson')
                    }
                }
                // С какой по какую неделю существует
                let fullClassName = $(this).attr('class').split(' ');
                let beWeeks = fullClassName[1];
                let n_week = $('.now_week__number').html();
                beWeeks = beWeeks.split('-');
                let start_week = beWeeks[0];
                let end_week = beWeeks[1];
                if(Number(n_week) < Number(start_week) || Number(n_week) > Number(end_week)){
                    $(this).addClass('drop_lesson_on_gap');
                }else{
                    $(this).removeClass('drop_lesson_on_gap');
                }
                // С какой по какую неделю существует
            })
    
            // !Even-Odd week
        }
        if(hash==href.substr(0,href.length-10)){
            let toLoadContent = hash + ' #content';
            $('#content').load(toLoadContent, show_title);
        }
    });


    $('.header__list li a').click(function(){
        document.documentElement.scrollIntoView(true);
        hash = window.location.hash.substr(1);
        window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-10);
        return false;
    })

    window.addEventListener('popstate', function (event) {
        let split_domen_site = 3;
        let url = window.location.href.split('/').slice(split_domen_site).join().replace(/,/g, '/').slice(1)
        let toLoadContent = url + ' #content';
     
        // Animation

        $(`#content`).hide('fast', loadContent);
        function loadContent() {
            $('#content').load(toLoadContent,'',showNewContent);
        }
        function showNewContent() {
            $('#content').fadeIn('normal',hideLoader);
        }
        
        // Animation
        function show_title() {
            let title = $('.title_chart span').html();
            let emoji_for_g = emoji_for_groups.get(title);
            if(emoji_for_g !== undefined){
                $('.title_chart span').html(title + ' ' + emoji_for_g);
                $('title').html(title + ' ' + emoji_for_g);
            }else{
                $('title').html(title);
            }
            $(".lesson__teacher").each(function(i){
                let name_teacher = $(this).text();
                let emoji_for_t = emoji_for_teachers.get(name_teacher);
                if(emoji_for_t !== undefined){
                    $(this).html(name_teacher + " " + emoji_for_t);
                }
            })
            // ! Time
            let start_date = new Date(2022, 1, 7);
            let while_date = new Date(2022, 1, 7);
            let now_date = new Date()
            let different_date = Math.ceil((now_date - while_date) / 86400000);
            let now_week = Math.ceil(different_date / 7);
            while_date.setDate(while_date.getDate() + (now_week - 1) * 7 );
            let d = while_date.toLocaleDateString();
            $('.now_week__number').html(now_week);
            $(".chart__element .date").each(function(i){
                $(this).html(d);
                while_date.setDate(while_date.getDate() + 1);
                d = while_date.toLocaleDateString();
            })
            $('.left_arrow').click(function (){
                number_week = $('.now_week__number').html();
                if(number_week > 1){
                    $('.now_week__number').html(Number(number_week) - 1);
                    $(".chart__element .date").each(function(){
                        let date = $(this).html().split('.');
                        date = date[2] + '-' + date[1] + '-' + date[0]
                        let this_date = new Date(date);
                        this_date.setDate(this_date.getDate() - 7);
                        $(this).html((this_date.toLocaleDateString()));
                    })
                }
                    
                // !Even-Odd week
            
                $('.lesson').each(function(){
                    if($('.now_week__number').html() % 2 === 0){
                        if($(this).hasClass('beByOddWeek')){
                            $(this).addClass('drop_lesson')
                        }
                        if($(this).hasClass('beByEvenWeek')){
                            $(this).removeClass('drop_lesson')
                        }
                    }else{
                        if($(this).hasClass('beByOddWeek')){
                            $(this).removeClass('drop_lesson')
                        }
                        if($(this).hasClass('beByEvenWeek')){
                            $(this).addClass('drop_lesson')
                        }
                    }
                     // С какой по какую неделю существует
                    let fullClassName = $(this).attr('class').split(' ');
                    let beWeeks = fullClassName[1];
                    let n_week = $('.now_week__number').html();
                    beWeeks = beWeeks.split('-');
                    let start_week = beWeeks[0];
                    let end_week = beWeeks[1];
                    if(Number(n_week) < Number(start_week) || Number(n_week) > Number(end_week)){
                        $(this).addClass('drop_lesson_on_gap');
                    }else{
                        $(this).removeClass('drop_lesson_on_gap');
                    }
                    // С какой по какую неделю существует
                })
        
                // !Even-Odd week
            })
            $('.right_arrow').click(function (){
                number_week = $('.now_week__number').html();
                if(number_week < 19){
                    $('.now_week__number').html(Number(number_week) + 1);
                    $(".chart__element .date").each(function(i){
                        let date = $(this).html().split('.');
                        date = date[2] + '-' + date[1] + '-' + date[0]
                        let this_date = new Date(date);
                        this_date.setDate(this_date.getDate() + 7);
                        $(this).html((this_date.toLocaleDateString()));
                    })
                }
                // !Even-Odd week
            
                $('.lesson').each(function(){
                    if($('.now_week__number').html() % 2 === 0){
                        if($(this).hasClass('beByOddWeek')){
                            $(this).addClass('drop_lesson')
                        }
                        if($(this).hasClass('beByEvenWeek')){
                            $(this).removeClass('drop_lesson')
                        }
                    }else{
                        if($(this).hasClass('beByOddWeek')){
                            $(this).removeClass('drop_lesson')
                        }
                        if($(this).hasClass('beByEvenWeek')){
                            $(this).addClass('drop_lesson')
                        }
                    }
                    // С какой по какую неделю существует
                    let fullClassName = $(this).attr('class').split(' ');
                    let beWeeks = fullClassName[1];
                    let n_week = $('.now_week__number').html();
                    beWeeks = beWeeks.split('-');
                    let start_week = beWeeks[0];
                    let end_week = beWeeks[1];
                    if(Number(n_week) < Number(start_week) || Number(n_week) > Number(end_week)){
                        $(this).addClass('drop_lesson_on_gap');
                    }else{
                        $(this).removeClass('drop_lesson_on_gap');
                    }
                    // С какой по какую неделю существует
                })
        
                // !Even-Odd week
            })
            // ! Time

            
            // !Even-Odd week
           
            $('.lesson').each(function(){
                if($('.now_week__number').html() % 2 === 0){
                    if($(this).hasClass('beByOddWeek')){
                        $(this).addClass('drop_lesson')
                    }
                    if($(this).hasClass('beByEvenWeek')){
                        $(this).removeClass('drop_lesson')
                    }
                }else{
                    if($(this).hasClass('beByOddWeek')){
                        $(this).removeClass('drop_lesson')
                    }
                    if($(this).hasClass('beByEvenWeek')){
                        $(this).addClass('drop_lesson')
                    }
                }
                // С какой по какую неделю существует
                let fullClassName = $(this).attr('class').split(' ');
                let beWeeks = fullClassName[1];
                let n_week = $('.now_week__number').html();
                beWeeks = beWeeks.split('-');
                let start_week = beWeeks[0];
                let end_week = beWeeks[1];
                if(Number(n_week) < Number(start_week) || Number(n_week) > Number(end_week)){
                    $(this).addClass('drop_lesson_on_gap');
                }else{
                    $(this).removeClass('drop_lesson_on_gap');
                }
                // С какой по какую неделю существует
            })
    
            // !Even-Odd week
        }
        // Animation
        function hideLoader() {
            show_title();
        }
        // Animation
        $('#content').load(toLoadContent, show_title);
    });

    //  AJAX
    
});




