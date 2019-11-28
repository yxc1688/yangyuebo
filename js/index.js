//滑屏功能
$(function () {
    var y1, y2;
    $('.section').mousedown(function (e) {
        y1 = e.pageY;
        console.log(y1)
    }).mouseup(function (e) {
        y2 = e.pageY;
        console.log(y2);
        if (y1 - y2 > 100) {
            $.fn.fullpage.moveTo($(this).index() + 2, 0);
        }
        if (y2 - y1 > 100) {
            $.fn.fullpage.moveTo($(this).index(), 0);
        }
    })
});

//loading 动画
$(function () {
    $('.head').hide();
    //loading动画结构
    var html = '<div id="loading">\n' +
        '    <img src="images/preloader.gif" alt="">\n' +
        '</div>';
    //插入到body内的开头
    $('body').prepend(html);
    //2秒之后移除结构
    setTimeout(function () {
        $('#loading').fadeOut('500', function () {
            $(this).remove()
        })
    }, 2000);
});

//第一页菜单
$(function () {
    $('#min_nav_btn').click(function () {
        $('#min_nav').css('left', '0')
    });
    $('#close_min_nav').click(function () {
        $('#min_nav').css('left', '-100%')
    });
    $('#min_nav li a').click(function () {
        $('#min_nav').css('left', '-100%')
    })
});

//第二页第五屏tab切换
$(function () {
    $('#tab_item li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).index() == 0) {
            $('#tab_box div').fadeOut(function () {
                $('#tab_box div:eq(0)').html('<h3>万物向阳 实地生长</h3>\n' +
                    '                                <p>\n' +
                    '                                    我们认为,生活就像是一颗种子，需要阳光、水分、土壤、空气的用心滋养，\n' +
                    '                                    只有不断去灌溉培育，精心呵护，才能让种子茁壮成长，生活才会变得更加美好幸福。\n' +
                    '                                </p>\n' +
                    '                                <p>\n' +
                    '                                    实地集团将为孕育人们美好生活的种子提供养分与能量，扶植他们破土发芽，生根向阳，去向更美好的地方。\n' +
                    '                                </p>');
                $('#tab_box div:eq(1)').html('<h3>打造美好人居生活体验</h3>\n' +
                    '                                <p>\n' +
                    '                                    人类文明的繁衍传承来自于外在两大驱力的推动，即科技创新与人文关怀。二者互为促进，互为支撑。\n' +
                    '                                    实地集团坚持用户至上原则，始终秉承初心，关注每一个个体的真实需求，锲而不舍的创新只为提升生活品质。\n' +
                    '                                    勇者不囿于现状，而智者尤擅于超越。实地相信，唯有不拘传统、锐意进取、持续迭代，才能在未来人居体验的探索道路上，\n' +
                    '                                    创造匠心铸就的精品。\n' +
                    '                                </p>');
                $('#tab_box div').fadeIn()
            });
        } else {
            $('#tab_box div').fadeOut(function () {
                $('#tab_box div:eq(0)').html('<h3>打造美好人居生活体验</h3>\n' +
                    '                                <p>\n' +
                    '                                    人类文明的繁衍传承来自于外在两大驱力的推动，即科技创新与人文关怀。二者互为促进，互为支撑。\n' +
                    '                                    实地集团坚持用户至上原则，始终秉承初心，关注每一个个体的真实需求，锲而不舍的创新只为提升生活品质。\n' +
                    '                                    勇者不囿于现状，而智者尤擅于超越。实地相信，唯有不拘传统、锐意进取、持续迭代，才能在未来人居体验的探索道路上，\n' +
                    '                                    创造匠心铸就的精品。\n' +
                    '                                </p>');
                $('#tab_box div:eq(1)').html('<h3>万物向阳 实地生长</h3>\n' +
                    '                                <p>\n' +
                    '                                    我们认为,生活就像是一颗种子，需要阳光、水分、土壤、空气的用心滋养，\n' +
                    '                                    只有不断去灌溉培育，精心呵护，才能让种子茁壮成长，生活才会变得更加美好幸福。\n' +
                    '                                </p>\n' +
                    '                                <p>\n' +
                    '                                    实地集团将为孕育人们美好生活的种子提供养分与能量，扶植他们破土发芽，生根向阳，去向更美好的地方。\n' +
                    '                                </p>');
                $('#tab_box div').fadeIn()
            });

        }
    });
});

//第二页切屏按钮
$(function () {
    $('.tab li').click(function () {
        $.fn.fullpage.moveTo(2, $(this).index());
        return false;
    });
    $('.toRight').click(function () {
        $.fn.fullpage.moveSlideRight()
    });
    $('.toLeft').click(function () {
        $.fn.fullpage.moveSlideLeft()
    });
    $('.section2_btn>span:first-of-type').click(function () {
        $.fn.fullpage.moveTo(2, $(this).parents('.slide').index() - 1);
        return false;
    })
    $('.section2_btn>span:last-of-type').click(function () {
        if ($(this).parents('.slide').index() + 1 >= 6) {
            $.fn.fullpage.moveTo(2, 0);
        } else {
            $.fn.fullpage.moveTo(2, $(this).parents('.slide').index() + 1);
        }

        return false;
    })
});

//滑出模态框
$(function () {
    $('.nav_btn').click(function () {
        $(this).parent().find('.modal');
        $(this).parents('.section').find('.modal').css('right', '0')
    });
    //收回模态框
    $('.close').click(function () {
        $(this).parent().css('right', '-100%')
    });
});

//导航按钮
$(function () {
    $('.nav_btn_group li').click(function () {
        $.fn.fullpage.moveTo($(this).index() + 2);
        return false;
    });
});

//模态框导航
$(function () {
    $('.modal_nav a').click(function () {
        $.fn.fullpage.moveTo($(this).parent().index() + 1);
        return false;
    });
});

//第三页鼠标移入效果
$(function () {
    $('.box .wrap').mouseleave(function () {
        $(this).find('.rotate').css('transform', 'rotate(180deg)').end()
            .find('.btn').text('');
    }).mousemove(function () {
        $(this).find('.rotate').css('transform', 'rotate(-180deg)').end()
            .find('.btn').text('EXPLORE')
    })
});

//了解更多关闭按钮
$(function () {
    $('.close_more').click(function () {
        if ($('body').width() < 1024) {
            $(this).parents('.shadow').find('.wrap_main').children().show(500)
                .end().end().end()
                .parents('.more_max').css('right', '-100%');
            $(this).parents('.shadow').find('.wrap_main').children('.understand').hide().end().children('.more_btn').hide()
        } else {
            $(this).parents('.shadow').find('.wrap_main').children().show(500)
                .end().end().end()
                .parents('.more_max').css('right', '-100%');
            $(this).parents('.shadow').find('.wrap_main').children('.more').hide()
        }
        return false;
    })
});

//第四页news选项卡
$(function () {
    $('#news .news_item').click(function () {
        $(this).addClass('active').siblings().removeClass("active")
            .parents('.left').next().find('.news_main')
            .eq($(this).index()).addClass('active').siblings().removeClass('active')
    })
});

//第四页小屏状态下换页
$(function () {
    $('.switch_btn span:eq(0)').click(function () {
        $('.news_main').eq(0).addClass('active').siblings().removeClass('active')
            .parents('.subject').prev().children('h2').text('01 GENERAL NEWS')
            .next().text('企业新闻');
        $(this).parent().children('p').eq(0).text('01')
    });
    $('.switch_btn span:eq(2)').click(function () {
        $('.news_main').eq(1).addClass('active').siblings().removeClass('active')
            .parents('.subject').prev().children('h2').text('02 SALES INFORMATION')
            .next().text('楼盘动态');
        $(this).parent().children('p').eq(0).text('02')
    })
});

//第五页详情
$(function () {
    $('.warp_main').click(function () {
        $(this).css('z-index', '50').find('.modal_content').show().css('z-index', '50').end()
            .siblings().css('z-index', '100').find('.modal_content').hide();
        return false;
    });
    $('.close_content').click(function () {
        $(this).parent().hide().css('z-index', '100').parents('.warp_main').css('z-index', '100');
        return false;
    })
});

//第五页详情
$(function () {
    $('.quire>input').keydown(function () {
        if ($('.quire>input').val().length > 0) {
            $('.inquire_btn').addClass('activation')
        } else {
            $('.inquire_btn').removeClass('activation')
        }
    })
});

//第五页现在加入按钮
$(function () {
    $('.join_btn').click(function () {
        $(this).parents('.more_join').hide().next().show();
        return false;
    });
    $('.close_join_now').click(function () {
        $(this).parents('#join_now').hide().prev().show();
        return false;
    })
});

//第五页查询功能
$(function () {
    $('.inquire_btn').click(function () {
        //储存标题
        var html = $('#table tr:first');
        $('#table .position').each(function () {
            if ($(this).text().indexOf($('#title').val()) != -1) {
                if($('#title').val()<1){
                    return false;
                }
                $('#table').html(html).append($(this).parents('tr'))
            }
            if ($('#table .position').text().indexOf($('#title').val()) == -1) {
                console.log(2)
                var noData = '<tr><td colspan="4" align="center">无数据</td></tr>';
                $('#table').html(html).append(noData)
            }
        });
    })
    $('#title').focus(function () {
        $('#table').html('<tr>\n' +
            '                                        <th>招聘职位</th>\n' +
            '                                        <th>工作所在地</th>\n' +
            '                                        <th>招聘公司</th>\n' +
            '                                        <th>发布时间</th>\n' +
            '                                    </tr>\n' +
            '                                    <tr>\n' +
            '                                        <td class="position">成本经理</td>\n' +
            '                                        <td class="work_address">广州</td>\n' +
            '                                        <td>集团总部</td>\n' +
            '                                        <td>2018.10.11</td>\n' +
            '                                    </tr>\n' +
            '                                    <tr>\n' +
            '                                        <td class="position">招标经理</td>\n' +
            '                                        <td class="work_address">广州</td>\n' +
            '                                        <td>集团总部</td>\n' +
            '                                        <td>2018.10.11</td>\n' +
            '                                    </tr>\n' +
            '                                    <tr>\n' +
            '                                        <td class="position">开发总监/经理</td>\n' +
            '                                        <td class="work_address">广州</td>\n' +
            '                                        <td>集团总部</td>\n' +
            '                                        <td>2018.10.11</td>\n' +
            '                                    </tr>')
    })
});

//了解更多按钮
$(function () {
    $('.more_btn').click(function () {
        $(this).parents('.shadow').find('.more_max').css('right', '0')
            .end().find('.wrap_main').children().hide();
        return false;
    })
});

//小屏状态下滑动更多按钮
$(function () {
    $('.more').click(function () {
        $(this).parents('.shadow').find('.more_max').css('right', '0')
            .end().find('.wrap_main').children().hide();
        return false;
    })
});

//第六页手风琴
$(function () {
    $('.tab_warp_main').hide()
    $('.tab_warp>li>p:first-of-type').click(function () {
        if ($(this).parent().find('.tab_warp_main').hasClass('slideDown')) {
            $(this).parent().find('.tab_warp_main').slideUp().removeClass('slideDown').end()
                .find('span').text('+')
        } else {
            $(this).parent().find('.tab_warp_main').addClass('slideDown').slideDown().end()
                .find('span').text('—').end()
                .siblings().find('span').text('+').end()
                .find('.tab_warp_main').slideUp().removeClass('slideDown');
        }
        return false;
    })
});

//第六页tab切换
$(function () {
    $('.tab_item').click(function () {
        $(this).addClass('active').siblings().removeClass('active').end()
            .parents('.left').next().find('.tab_warp').eq($(this).index()).addClass('active')
            .siblings().removeClass('active')
    })
});

//第七页下拉菜单
$(function () {
    //点击显示或隐藏菜单
    var num = 0;
    //地址栏数组
    var arr_address = ['广州市天河区华夏路16号富力盈凯广场21楼', '广州市黄埔区乔丰路与永和大道交汇处', '广州市广汕路21号线钟岗地铁站西侧', '天津市津蓟区高速温泉城出口西侧500米', '武汉汉阳经济技术开发区滨江带', '无锡市惠山区城铁国际商务区', '惠州市惠阳区惠南大道旁', '遵义市新蒲新区播州大道与新蒲大道交叉路口', '三亚海棠区海棠北路18号（海棠广场北侧200米）', '六盘水钟山区明湖路湿地公园旁', '中山市火炬开发区博爱七路113号（麦当劳得来速餐厅旁）', '昆明市五华区普吉路普吉立交东北侧200米', '惠阳经济开发区御和路（淡水河岸）', '成都市青白江新城中心家乐福旁', '深圳市罗湖区红桂路红桂横街27号', '太原市晋阳街与体育路交汇处以南', '泰州市海陵区秋雪湖大道（秋雪湖旁100米）'];
    //电话栏数组
    var arr_tel = ['020-89192000', '020-26227888', '020-32636888', '022-29208228', '027-83769888', '0510-83256666', '0752-3916888', '0851-28869999', '0898-88859999', '0858-8709888', '0760-85280728', '0871-64336666', '0752-3737111', '028-83662666', '0755-22380888', '0351-5658888', '0523-82379999'];
    $('#drop_down').click(function () {
        if (num == 0) {
            $('#drop_down_menu').show();
            num = 1;
        } else {
            $('#drop_down_menu').hide();
            num = 0;
        }
    });
    //选中菜单中的li
    $('#drop_down_menu li').click(function () {
        $(this).addClass('change').siblings().removeClass('change');
        $('#drop_down_change').text($('#drop_down_menu .change').text());
        $('#address').text(arr_address[$(this).index()]);
        $('#tel').text(arr_tel[$(this).index()]);
        if ($(this).index() != 0) {
            $('.detailed>span').text('')
        } else {
            $('.detailed>span').text('21st Floor, R&F Yingkai Plaza, 16 Huaxia Road, Tianhe District, Guangzhou')
        }
        $('#drop_down_menu').hide();
        num = 0;
    })
});

//第七页联系按钮
$(function () {
    //显示
    $('#contact_btn').click(function () {
        $('#contact').show();
        $('#end').hide()
    });
    //隐藏
    $('#close_contact').click(function () {
        $('#contact').hide();
        $('#end').show()
    });
    $('.min_right').click(function () {
        $('#contact').show();
        $('#end').hide()
    });
});

//第七页联系内下拉菜单
$(function () {
    var num1 = 0;
    var num2 = 0;
    $('#category').click(function () {
        if (num1 == 0) {
            $(this).children('ul').show();
            num1 = 1;
        } else {
            $(this).children('ul').hide();
            num1 = 0;
        }
        return false;
    });
    $('#category ul li').click(function () {
        $('#category span').text($(this).text());
        $(this).parent().hide();
        num1 = 0;
        return false;
    });
    $('#nex').click(function () {
        if (num2 == 0) {
            $(this).children('ul').show();
            num2 = 1;
        } else {
            $(this).children('ul').hide();
            num2 = 0;
        }
        return false;
    });
    $('#nex ul li').click(function () {
        $('#nex span').text($(this).text());
        $(this).parent().hide();
        num2 = 0;
        return false;
    })
});

//提交按钮
$(function () {
    $('.main_input>p input').keyup(function () {
        if ($('.main_input>p input').val().length > 0) {
            $('.submit_btn').addClass('able')
        } else {
            $('.submit_btn').removeClass('able')
        }
    })
});