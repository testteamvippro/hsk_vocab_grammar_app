// Grammar data extracted from PDFs and DOCX files under ./data/Ngu phap*.
// Fields: structure = grammar point, usage = explanation, ex_cn/ex_py/ex_vi = first detected example.

export const grammarData = {
    "hsk1": [
        {
            "structure": "1. Đại từ tiếng Trung",
            "usage": "Đại từ nhân xưng\nHán\ntự\nPhiên\nâm Nghĩa Ví dụ\n我 wǒ chỉ ngôi thứ nhất\n(tôi, tớ, mình, ta, tao,…)\n我是学生。\n/wǒ shì xué sheng/\nTôi là học sinh\n你 nǐ cậu, bạn, anh, chị, mày…\n你是我的朋友。\n/nǐ shì wǒ de péng\nyou/\nBạn là bạn của tôi\n他 tā chỉ ngôi thứ ba số ít, dùng cho phái nam (cậu ấy, anh ấy, hắn, ông ấy,…) 他是我的爸爸。\n/nǐ shì wǒ de bàba/\n她 tā chỉ ngôi thứ ba số ít, dùng cho phái nữ (cô ấy, chị ấy, bà ấy,…)\n她是我的姐姐。\n/tā shì wǒ de jiějiè/\nCô ấy là chị gái tôi\n我们 wǒmen chúng tôi, chúng ta, chúng tớ, chúng mình,…\n我们是同学。\n/wǒmen shì tóngxué/\nChúng tôi là bạn cùng\nlớp\n你们 nǐmen các bạn, các cậu, các anh, các chị, chúng mày,…\n你们是中国人。\n/nǐmen shì zhōngguó\nrén/\nCác bạn là người\nTrung Quốc\n他们 tāmen chỉ ngôi thứ ba số nhiều , thường chỉ nam giới, cũng dùng chung cho cả\nnam và nữ ( họ, bọn họ, các anh ấy,…)\n他们是越南人。\n/tāmen shì yuè nán\nrén/\nBọn họ là người Việt\nNam\n她们 tāmen chỉ ngôi thứ ba số nhiều, dùng cho phái nữ (họ, các chị ấy, các cô ấy,…)\n她们在聊天。\n/tāmen zài liǎotiàn/\nCác cô ấy đang trò\nchuyện\nĐại từ chỉ định\nHán tự/ Cấu\ntrúc Phiên âm Nghĩa Ví dụ\n这 zhè đây, này, cái này,… 这是王老师。\n/zhè shì wáng lǎo\nshī/\nĐây là thầy Vương\n那 nà kia, cái kia, cái ấy, đó,…\n那本书是我的。\n/nà běn shū shì wǒ\nde/\nQuyển sạch kia là\ncủa tôi.\n这/那+ 是+\ndanh từ\nzhè/nà\nshì ….. Đây là…/ kia là…….\n这是我的书。\n/zhè shì wǒ de shū/\nĐây là sách của\ntôi.\n那是他的笔。\n/nà shì tā de bǐ/\nKia là bút của anh\nấy.\n这/那+ lượng từ\n+ danh từ zhè/nà…… Cái…..này/ cái…. kia\n这本书\n/zhè běn shū/\nQuyển sách này.\n那棵树\n/nà kē shù/\nCái cây kia\n这儿 zhèr\nở đây, chỗ này, bên này,…\n(ngoài ra có thể kết hợp với đại từ nhân xưng hoặc danh từ\nchỉ người để chỉ chỗ của ai đó)\n我这儿有很多玩\n具。\n/wǒ zhèr yóu hěn\nduò wán jù/\nChỗ của tôi có rất\nnhiều đồ chơi.\n那儿 nàr chỗ kia, chỗ ấy, nơi ấy,… (ngoài ra có thể kết hợp với đại từ\nnhân xưng hoặc danh từ chỉ người để chỉ chỗ của ai đó)\n李老师哪儿有你的\n笔记本。...",
            "ex_cn": "我 wǒ chỉ ngôi thứ nhất",
            "ex_py": "(tôi, tớ, mình, ta, tao,…)",
            "ex_vi": "/wǒ shì xué sheng/",
            "source": "NGỮ PHÁP HSK 1.pdf",
            "page": ""
        },
        {
            "structure": "2. Chữ số tiếng Trung trong HSK 1",
            "usage": "Biểu thị thời gian\nThứ tự sắp xếp thời gian trong tiếng trung là từ giờ tới phút và giây, từ năm tới tháng rồi mới đến ngày.\n● 9 点 20 分 /jiǔ diǎn èr shí fēn/: 9 giờ 20 phút\n● 2020 年 12 月 7 日 /èr líng èr líng nián shí èr yuè qī rì/: Ngày 7 tháng 12 năm 2020\n● 星期四 /xīngqīsì/: Thứ tư\nBiểu thị tuổi tác\n● 他今年 31 岁 /tā jīnnián sān shí sì yī suì/: Anh ấy năm nay 31 tuổi\nBiểu thị số tiền\n● 10 块 /shí kuài/: 10 đồng ( tệ)\n● 五毛 / wǔmáo/: 5 hào ( 1 đồng bằng 10 hào)\nNgười Trung Quốc khi nói số tiền sẽ lấy 4 số 0 làm một mốc, ví dụ:\n100.000 thì người Trung Quốc sẽ nói là 十万 （10.0000）\nBiểu thị chữ số\nKhi đọc các dãy số dài như số nhà, số điện thoại, số chứng minh thư….. thì ta đọc từng số từ trái qua phải như số đếm.\n● Chỉ có số một là “一 Yī” thường đọc thành yāo\n我的电话是 56290001 /wǒ de diànhuà shì wǔ lìu èr jiǔ líng líng líng yāo /: Số điện thoại của tôi là 56290001",
            "ex_cn": "● 9 点 20 分 /jiǔ diǎn èr shí fēn/: 9 giờ 20 phút",
            "ex_py": "Biểu thị tuổi tác",
            "ex_vi": "",
            "source": "NGỮ PHÁP HSK 1.pdf",
            "page": ""
        },
        {
            "structure": "3. Lượng từ",
            "usage": "Trong tiếng Trung có rất nhiều lượng từ được dùng trong các trường hợp khác nhau. Tuy nhiên, ngữ pháp HSK1 chỉ bao gồm một\nsố cấu trúc với lượng từ sau.\nDùng sau số từ:\n● Số từ + lượng từ + danh từ\n一碗面条 /yī wǎn miàntiáo /: 1 bát mì\n三本书 / Sān běn shū / 3 cuốn sách\nDùng sau “这” ”那” ”几”：\n● 这/那/几 + lượng từ + danh từ\n这个椅子 /zhègeyǐzi/: cái ghế này\n那些年 /nàxiēnián/: những năm tháng đó\n几条裤子/jǐ běnkùzi/:mấy chiếc quần\n那个人是他爸爸。\n/Nàgè rén shì tā bàba/\nNgười kia là bố của anh ấy.",
            "ex_cn": "一碗面条 /yī wǎn miàntiáo /: 1 bát mì",
            "ex_py": "",
            "ex_vi": "",
            "source": "NGỮ PHÁP HSK 1.pdf",
            "page": ""
        },
        {
            "structure": "4. Phó từ",
            "usage": "Phó từ phủ định:\n● 不 (bù – không): Dùng để phủ định cho những hành động ở hiện tại, tương lai và phủ định sự thật\n我不是老师 /wǒ bú shì lǎoshī/: Tôi không phải là giáo viên\n● 没 (méi – không): Dùng để phủ định cho hành động xảy ra trong quá khứ\n他没去过北京 /tā méi qù guò běijīng/: Anh ta chưa từng đến Bắc Kinh\nPhó từ chỉ mức độ:\nThường đứng trước tính từ hoặc động từ tâm lý để bổ nghĩa cho chúng\n● 很 (hěn – rất, quá):\n她很高兴 /tā hěn gāoxìng/: Cô ấy rất vui\n● 太 (tài – quá, lắm): 太+tính từ+了\n太晚了! /tài wǎnle/: Muộn quá rồi!\nPhó từ chỉ phạm vi:\n● 都 (dōu – đều): 我们都是越南人 /wǒmen dōushìyuènánrén/: Chúng ta đều là người Việt Nam\nChú ý có 2 dạng phủ định\n都不 + động từ: Đều không ……( phủ định toàn bộ)\nVí dụ:\n我们都不是学生。\nwǒ men dōu bù shì xué shēng\nChúng tôi đều không phải là học sinh (Tất cả đều không phải là học sinh)\n不都+ động từ: Không đều…… ( phủ định một bộ phận)\nVí dụ:\n我们不都是学生。\nwǒ men bù dōu shì xué shēng。\nChúng tôi không phải đều là học sinh (Có người là học sinh, có người không)\nKết hợp với phó từ 也:\n也都+động từ: Cũng đều……\nVí dụ:\n他们也都是越南人\nTāmen yě dōu shì yuè nán rén。\nHọ cũng đều đi Trung Quốc du học.",
            "ex_cn": "● 不 (bù – không): Dùng để phủ định cho những hành động ở hiện tại, tương lai và phủ định sự thật",
            "ex_py": "Phó từ chỉ mức độ:",
            "ex_vi": "",
            "source": "NGỮ PHÁP HSK 1.pdf",
            "page": ""
        },
        {
            "structure": "5. Liên từ",
            "usage": "和 (hé – và, với)\nVí dụ: 我和你 /wǒ hé nǐ/: Tôi và bạn\nLưu ý liên từ này chỉ dùng để nối giữa hai danh từ , nối giữa 2 chủ ngữ, nối 2 động từ đơn, không dùng để nối giữa 2 vế câu.",
            "ex_cn": "和 (hé – và, với)",
            "ex_py": "Lưu ý liên từ này chỉ dùng để nối giữa hai danh từ , nối giữa 2 chủ ngữ, nối 2 động từ đơn, không dùng để nối giữa 2 vế câu.",
            "ex_vi": "",
            "source": "NGỮ PHÁP HSK 1.pdf",
            "page": ""
        },
        {
            "structure": "6. Giới từ",
            "usage": "Chủ ngữ +在 (zài) + Tân ngữ chỉ địa điểm + động từ + Thành phần khác: Ai làm gì ở đâu.\nVí dụ:\n他在房子里等你。\nTā zài fángzi lǐ děng nǐ.\nAnh ấy đang ở trong phòng đợi bạn .",
            "ex_cn": "Chủ ngữ +在 (zài) + Tân ngữ chỉ địa điểm + động từ + Thành phần khác: Ai làm gì ở đâu.",
            "ex_py": "Ví dụ:",
            "ex_vi": "Tā zài fángzi lǐ děng nǐ.",
            "source": "NGỮ PHÁP HSK 1.pdf",
            "page": ""
        },
        {
            "structure": "7. Trợ động từ",
            "usage": "● 会 (huì): biết ( biết thông qua học tập và rèn luyện)\n我会跳舞 /wǒ huì tiào wǔ/: Tôi biết nhảy múa\n● 能 (néng): Có thể\n你现在能过来吗？/nǐ xiàn zài néng guò lái ma?/: Bây giờ bạn có thể qua đây không?\nPhủ định của 2 trợ động từ này là 不会/不能",
            "ex_cn": "● 会 (huì): biết ( biết thông qua học tập và rèn luyện)",
            "ex_py": "",
            "ex_vi": "",
            "source": "NGỮ PHÁP HSK 1.pdf",
            "page": ""
        },
        {
            "structure": "8. Trợ từ",
            "usage": "Trợ từ kết cấu: 的 (de). Dùng để nối giữa định ngữ và trung tâm ngữ\nCấu trúc: Định ngữ + (的) + Trung tâm ngữ\nĐịnh ngữ là:\n● Thành phần bổ nghĩa cho danh từ hoặc ngữ danh từ\n● Dùng để miêu tả và hạn chế cho danh từ\n● Đứng trước danh từ.\nTrung tâm ngữ: Là thành phần đứng sau định ngữ, là đối tượng được nhắc chính đến trong cụm danh từ.\nTrường hợp giữa định ngữ và trung tâm ngữ bắt buộc có trợ từ kết cấu的\n● Khi danh từ hoặc đại từ làm định ngữ biểu thị mới quan hệ miêu tả, hạn chế hoặc quan hệ sở hữu thì phải\nthêm 的\nVí dụ: 我的衣服 /wǒ de yīfu/: Quần áo của tôi\n● Khi cụm tính từ, cụm chủ vị làm định ngữ thì phải thêm 的.\nVí dụ:\n很漂亮的裙子: Cái váy rất đẹp\n我买的东西: Đồ mà tôi mua\nTrợ từ ngữ khí:\n● 了 (le): Thường đứng cuối câu, biểu thị ngữ khí khẳng định, hoặc động tác đã xảy ra.\n他去学校了/tā qù xuéxiào le/: Anh ta đến trường rồi\n● 吗 (ma): …..không? Đứng cuối câu dùng cho câu hỏi có…..không?\n他是学生吗？/tā shì xuéshēng ma?/: Cậu ấy là học sinh à?\n● 呢 (ne): Đứng cuối câu, giúp câu nói thêm uyển chuyển, hoặc dùng cho câu hỏi tỉnh lược\n你在哪儿呢？/nǐ zài nǎr ne?/ Cậu đang ở đâu vậy?",
            "ex_cn": "Trợ từ kết cấu: 的 (de). Dùng để nối giữa định ngữ và trung tâm ngữ",
            "ex_py": "Định ngữ là:",
            "ex_vi": "● Thành phần bổ nghĩa cho danh từ hoặc ngữ danh từ",
            "source": "NGỮ PHÁP HSK 1.pdf",
            "page": ""
        },
        {
            "structure": "9. Câu trần thuật",
            "usage": "Câu khẳng định\n明天是星期一 /míngtiān shì xīngqīyī/: Ngày mai là thứ hai\n我喜欢他 /wǒ xǐhuān tā/: Tôi quen anh ta\n天气很热 /tiānqì hěn rè/: Thời tiết rất tốt\nCâu phủ định:\n不 (bù): 他不是我的哥哥 /tā bú shì wǒ de gēgē/: Anh ấy không phải anh trai tôi\n没 (méi): 她没去看电视剧 /tā méi qù kàn diànshìjù/: Cô ta đã không xem phim truyền hình",
            "ex_cn": "明天是星期一 /míngtiān shì xīngqīyī/: Ngày mai là thứ hai",
            "ex_py": "",
            "ex_vi": "",
            "source": "NGỮ PHÁP HSK 1.pdf",
            "page": ""
        },
        {
            "structure": "10. Câu nghi vấn",
            "usage": "吗 (ma): 这是你的书吗？/zhè shì nǐ de shū ma?/: Đây là sách của bạn à?\n呢 (ne): 我是老师，你呢？/wǒ shì lǎoshī, nǐ ne?/: Tôi là giáo viên, còn bạn?",
            "ex_cn": "吗 (ma): 这是你的书吗？/zhè shì nǐ de shū ma?/: Đây là sách của bạn à?",
            "ex_py": "",
            "ex_vi": "",
            "source": "NGỮ PHÁP HSK 1.pdf",
            "page": ""
        },
        {
            "structure": "11. Câu cầu khiến",
            "usage": "请 (qǐng): 请进 /qǐngjìn/: Mời vào",
            "ex_cn": "请 (qǐng): 请进 /qǐngjìn/: Mời vào",
            "ex_py": "",
            "ex_vi": "",
            "source": "NGỮ PHÁP HSK 1.pdf",
            "page": ""
        },
        {
            "structure": "12. Câu cảm thán",
            "usage": "太 (tài): 太漂亮了！ /tài piàoliang le/: Quá đẹp rồi\n13. Các câu dạng đặc biệt\nCâu chữ “是”\n他是我的同学 /tā shì wǒ de tóngxué/: Anh ấy là bạn học của tôi\nCâu chữ “有”\n一个星期有 7 日 /yī ge xīng qī yóu qī rì/: Một tuần có 7 ngày\nMẫu câu “是……的”\nDùng để nhấn mạnh thời gian, địa điểm, đối tượng, cách thức của động tác đã xảy ra trong quá khứ\n● Nhấn mạnh thời gian:\n我是昨天回来的 /wǒ shì zuótiān huí lái de/: Tôi về từ hôm qua.\n● Nhấn mạnh địa điểm:\n这是在北京买的 /zhè shì zài běijīng mǎi de/: Đây là đồ mua ở Bắc Kinh.\n● Nhấn mạnh phương thức:\n他是开车来的 /tā shì kāi chē lái de/: Anh ấy lái xe đến đấy.",
            "ex_cn": "太 (tài): 太漂亮了！ /tài piàoliang le/: Quá đẹp rồi",
            "ex_py": "13. Các câu dạng đặc biệt",
            "ex_vi": "",
            "source": "NGỮ PHÁP HSK 1.pdf",
            "page": ""
        },
        {
            "structure": "14. Trạng thái của hành động",
            "usage": "Dùng “在……呢” biểu thị hành động đang tiếp diễn:\n他们在学习呢 /tāmen zài xué xí ne/: Họ đang học bài\nChúc bạn học tiếng Trung thật vui nhé!",
            "ex_cn": "Dùng “在……呢” biểu thị hành động đang tiếp diễn:",
            "ex_py": "Chúc bạn học tiếng Trung thật vui nhé!",
            "ex_vi": "",
            "source": "NGỮ PHÁP HSK 1.pdf",
            "page": ""
        },
        {
            "structure": "1. Đại từ nhân xưng",
            "usage": "我 /wǒ/: tôi, tớ, mình, ta, tao,…\n你 /nǐ/: cậu, bạn, anh, chị, mày,…\n他 /tā/: cậu ấy, anh ấy, hắn, ông ấy,… (chỉ ngôi thứ ba số ít, dùng cho phái nam)\n她 /tā/: cô ấy, chị ấy, bà ấy,… (chỉ ngôi thứ ba số ít, dùng cho phái nữ)\n我们 /wǒmen/: chúng tôi, chúng ta, chúng tớ, chúng mình,…\n你们 /nǐmen/: các bạn, các cậu, các anh, các chị, chúng mày,…\n他们 /tāmen/: họ, bọn họ, các anh ấy,… (chỉ ngôi thứ ba số nhiều , thường chỉ nam\ngiới, cũng dùng chung cho cả nam và nữ)\n她们 /tāmen/: họ, các chị ấy, các cô ấy,… (chỉ ngôi thứ ba số nhiều, dùng cho phái\nnữ)",
            "ex_cn": "我 /wǒ/: tôi, tớ, mình, ta, tao,…",
            "ex_py": "",
            "ex_vi": "",
            "source": "Tổng hợp ngữ pháp hsk1.pdf",
            "page": ""
        },
        {
            "structure": "2. Đại từ chỉ thị:",
            "usage": "这 /zhè/: đây, này, cái này,…\n这儿 /zhèr/: ở đây, chỗ này, bên này,…\n那 /nà/: kia, cái kia, cái ấy, đó,…\n那儿 /nàr/: chỗ kia, chỗ ấy, nơi ấy,…\n这/那+ 是+ danh từ: Đây là…/ kia là…….\n这/那+ lượng từ + danh từ: Cái…..này/ cái…. kia\nVí dụ: 这是阮老师\nZhè shì ruǎn lǎoshī.\nĐây là cô giáo Nguyễn.\n那个人是谁？\nNàgè rén shì shéi?\nNgười kia là ai?\nĐại từ 那儿/这儿 dùng như danh t ừ chỉ địa điểm bình thường, ngoài ra có th ể kết\nhợp với đại từ nhân xưng hoặc danh từ chỉ người để chỉ chỗ của ai đó như: 我这儿\n/你那儿/ 老师那儿……\nVí dụ:\n我这儿有很多中国留学生。\nWǒ zhèr yǒu hěnduō zhōngguó liúxuéshēng.\nChỗ tôi có rất nhiều du học sinh Trung Quốc.",
            "ex_cn": "这 /zhè/: đây, này, cái này,…",
            "ex_py": "",
            "ex_vi": "",
            "source": "Tổng hợp ngữ pháp hsk1.pdf",
            "page": ""
        },
        {
            "structure": "3. Đại từ nghi vấn",
            "usage": "谁 /shéi/: ai\n哪 /nǎ/: nào, cái nào, cái gì,…\n哪儿 /nǎr/: chỗ nào, đâu, ở đâu,…\n什么 /shénme/: cái gì\n多少 /duōshao/: bao nhiêu\n几 /jǐ/: mấy\n怎么 /zěnme/: thế nào, sao, làm sao\n怎么样 /zěnmeyàng/: thế nào, ra làm sao\nĐại từ nghi vấn 哪 /nǎ/: nào, cái nào, cái gì,…\n哪 + lượng từ + danh từ: …… nào?\n哪本书是你的？\nNǎ běn shū shì nǐ de?\nQuyển sách nào là của bạn?\nĐại từ nghi vấn 几 /jǐ/: mấy\n几+ lượng từ+ danh từ: Mấy …..？\n你买几个包子？\nNǐ mǎi jǐ gè bāozi?\nBạn mua mấy cái bánh bao?\nĐại từ nghi vấn 多少 /duōshao/: bao nhiêu\n多少+danh từ: bao nhiêu….?\n多少钱一斤？\nDuōshǎo qián yī jīn?\nBao nhiêu tiền một cân?\nĐại từ nghi vấn 怎么 /zěnme/: thế nào, sao, làm sao\n怎么+ động từ: dùng đề hỏi cách thức thực hiện của động tác\n这个字怎么写？\nZhège zì zěnme xiě?\nChữ này viết thế nào?\nĐại từ nghi vấn 怎么样 /zěnmeyàng/: thế nào, ra làm sao\nThường đứng cuối câu, hoặc làm định ngữ, dùng để hỏi tính chất, tình hình hoặc hỏi\ný kiến\n他是怎么样的人？\nTā shì zěnme yàng de rén?\nAnh ấy là người như thế nào?\n下午我们去公园玩儿， 怎么样？\nXiàwǔ wǒmen qù gōngyuán wánr, zěnme yàng?\nChiều chúng mình đi chơi công viên nhé, thế nào?\nXem thêm bài học về đại từ nghi vấn\nII. CHỮ SỐ\n1. Biểu thị thời gian:\nThứ tự sắp xếp thời gian trong tiếng trung là từ to tới nhỏ, từ năm tới tháng rồi mới\nđến ngày\n8 点 40 分 /bā diǎn sìshí fēn/: 8 giờ 40 phút\n2009 年 7 月 7 日 /èrlínglíngjiǔ nián qī yuè qī rì/: Ngày 7 tháng 7 năm 2009\n星期四 /xīngqīsì/: Thứ tư\nCách nói thời gian trong tiếng Trung:\n2. Biểu thị tuổi tác:\n他今年 24 岁 /tā jīnnián èrshísì suì/: Anh ấy năm nay 24 tuổi\n3. Biểu thị số tiền:\n15 块 /shíwǔ kuài/: 15 đồng ( tệ)\n四毛 / Sì máo/: 4 hào ( 1 đồng bằng 10 hào)\nChú ý người Trung Quốc khi nói số tiền sẽ lấy 4 số 0 làm một mốc, ví dụ:\n100.000 thì người Trung Quốc không nói là 一百千， mà sẽ nói là 十万 （10.0000）\n4. Biểu thị chữ số:...",
            "ex_cn": "谁 /shéi/: ai",
            "ex_py": "",
            "ex_vi": "",
            "source": "Tổng hợp ngữ pháp hsk1.pdf",
            "page": ""
        },
        {
            "structure": "1. Phó từ phủ định:",
            "usage": "不 (bù - không): 我不是学生 /wǒ bú shì xuésheng/: Tôi không phải là học sinh\nDùng để phủ định cho hành động ở hiện tại, tương lai và phủ định sự thật\n没 (méi - không): 他没去医院 /tā méi qù yīyuàn/: Anh ta đã không đến bệnh viện\nDùng để phủ đinh cho hành động xảy ra trong quá khứ\nBài học bổ sung về cách sử dụng 不 (bù) và 没 (méi)",
            "ex_cn": "不 (bù - không): 我不是学生 /wǒ bú shì xuésheng/: Tôi không phải là học sinh",
            "ex_py": "Dùng để phủ định cho hành động ở hiện tại, tương lai và phủ định sự thật",
            "ex_vi": "Dùng để phủ đinh cho hành động xảy ra trong quá khứ",
            "source": "Tổng hợp ngữ pháp hsk1.pdf",
            "page": ""
        },
        {
            "structure": "2. Phó từ chỉ mức độ:",
            "usage": "Thường đứng trước tính từ hoặc động từ tâm lý để bổ nghĩa cho chúng\n很 (hěn – rất, quá): 他很高兴 /wǒ hěn gāoxìng/: Anh ấy rất vui\n太 (tài – quá, lắm): 太好了! /tài hǎo le/: Quá tốt rồi!\nBài học bổ sung về phó từ chỉ mức độ:",
            "ex_cn": "很 (hěn – rất, quá): 他很高兴 /wǒ hěn gāoxìng/: Anh ấy rất vui",
            "ex_py": "Bài học bổ sung về phó từ chỉ mức độ:",
            "ex_vi": "",
            "source": "Tổng hợp ngữ pháp hsk1.pdf",
            "page": ""
        },
        {
            "structure": "3. Phó từ chỉ phạm vi:",
            "usage": "都 (dōu – đều): 我们都看见那个人了 /wǒmen dōu kànjiàn nàge rén le/: Chúng tôi\nđều nhìn thấy người ấy rồi\nChú ý có 2 dạng phủ định:\n都不 + động từ: Đều không ……( phủ định toàn bộ)\n不都+ động từ: Không đều…… ( phủ định một bộ phận)\nVí dụ: 他们都不是中国人。\nTāmen dōu bùshì zhōngguó rén.\nHọ đều không phải là người Trung Quốc.\nKết hợp với phó từ 也:\n也都+động từ: Cũng đều……\n他们也都去中国留学。\nTāmen yě dōu qù zhōngguó liúxué.\nHọ cũng đều đi Trung Quốc du học.\nV. LIÊN TỪ\n和 (hé – và, với): 我和你 /wǒ hé nǐ/: Tôi và bạn\nLưu ý liên từ này chỉ dùng để nối giữa hai danh từ , nối giữa 2 chủ ngữ, nối 2 động\ntừ đơn, không dùng để nối giữa 2 vế câu.\nVI. GIỚI TỪ\nChủ ngữ +在 (zài) + Tân ngữ chỉ địa điểm + động từ + Thành phần khác: Ai làm gì\nở đâu.\n他在学校门口等你。\nTā zài xuéxiào ménkǒu děng nǐ.\nAnh ấy chờ bạn ở cổng trường.\nzheng.htm\nVII. TRỢ ĐỘNG TỪ\n会 (huì): biết ( biết thông qua học tập và rèn luyện)\n我会做饭 /wǒ huì zuò fàn/: Tôi biết nấu cơm\n能 (néng): Có thể\n你什么时候能来？/nǐ shénme shíhou néng lái?/: Khi nào thì bạn có thể đến?\nPhủ định của 2 trợ động từ này là 不会/不能\nVIII. TRỢ TỪ",
            "ex_cn": "都 (dōu – đều): 我们都看见那个人了 /wǒmen dōu kànjiàn nàge rén le/: Chúng tôi",
            "ex_py": "đều nhìn thấy người ấy rồi",
            "ex_vi": "Chú ý có 2 dạng phủ định:",
            "source": "Tổng hợp ngữ pháp hsk1.pdf",
            "page": ""
        },
        {
            "structure": "1. Trợ từ kết cấu: 的 (de)",
            "usage": "Dùng để nối giữa định ngữ và trung tâm ngữ\nCấu trúc: Định ngữ + (的) + Trung tâm ngữ\nA. Định ngữ là gì?\nThành phần bổ nghĩa cho danh từ hoặc ngữ danh từ\nDùng để miêu tả và hạn chế cho danh từ\nĐứng trước danh từ.\nB. Trung tâm ngữ: Là thành phần đứng sau định ngữ, là đối tượng được nhắc chính\nđến trong cụm danh từ.\nC. Trường hợp giữa định ngữ và trung tâm ngữ bắt buộc có trợ từ kết cấu 的\nKhi danh từ hoặc đại từ làm định ngữ biểu thị mới quan hệ miêu tả, hạn chế hoặc\nquan hệ sở hữu thì phải thêm 的\nVí dụ: 老师的书: Sách của thầy giáo\n我的电脑 /wǒ de diànnǎo/: Máy tính của tôi\nKhi cụm tính từ, cụm chủ vị làm định ngữ thì phải thêm 的.\nVí dụ:\n很好的人: người rất tốt\n我买的杂志: tạp chí mà tôi mua\nXem thêm bài học về cách sử dụng trợ từ kết cấu 的 (de):\nngu.htm",
            "ex_cn": "Cấu trúc: Định ngữ + (的) + Trung tâm ngữ",
            "ex_py": "A. Định ngữ là gì?",
            "ex_vi": "Thành phần bổ nghĩa cho danh từ hoặc ngữ danh từ",
            "source": "Tổng hợp ngữ pháp hsk1.pdf",
            "page": ""
        },
        {
            "structure": "2. Trợ từ ngữ khí:",
            "usage": "了 (le): Thường đứng cuối câu, biểu thị ngữ khí khẳng định, hoặc động tác đã xảy\nra.\n他去医院了/tā qù yīyuàn le/: Anh ta đến bệnh viện rồi\n吗 (ma): .....không? Đứng cuối câu dùng cho câu hỏi có.....không?\n他是医生吗？/tā shì yīshēng ma?/: Cậu ấy là bác sĩ à?\n呢 (ne): Đứng cuối câu, giúp câu nói thêm uyển chuyển, hoặc dùng cho câu hỏi tỉnh\nlược\n你在哪儿呢？/nǐ zài nǎr ne?/ Cậu đang ở đâu vậy?\nA: 你身体好吗？\nNǐ shēntǐ hǎo ma?\nSức khỏe của bạn tốt không?\nB：很好。你呢？\nHěn hǎo. Nǐ ne?\nRất tốt, còn bạn thì sao?\nXem thêm: Cách dùng trợ từ ngữ khí 了 trong tiếng Trung\nIX. CÂU TRẦN THUẬT",
            "ex_cn": "了 (le): Thường đứng cuối câu, biểu thị ngữ khí khẳng định, hoặc động tác đã xảy",
            "ex_py": "",
            "ex_vi": "",
            "source": "Tổng hợp ngữ pháp hsk1.pdf",
            "page": ""
        },
        {
            "structure": "1. Câu khẳng định:",
            "usage": "明天是星期六 /míngtiān xīngqīliù/: Ngày mai là thứ bảy\n我认识他 /wǒ rènshi tā/: Tôi quen anh ta\n天气很好 /tiānqì hěn hǎo/: Thời tiết rất tốt",
            "ex_cn": "明天是星期六 /míngtiān xīngqīliù/: Ngày mai là thứ bảy",
            "ex_py": "",
            "ex_vi": "",
            "source": "Tổng hợp ngữ pháp hsk1.pdf",
            "page": ""
        },
        {
            "structure": "2. Câu phủ định:",
            "usage": "不 (bù): 他不在饭店 /tā bú zài fàndiàn/: Anh ấy không ở khách sạn\n没 (méi): 她没去看电影 /tā méi qù kàn diànyǐng/: Cô ta đã không đi xem phim\nX. CÂU NGHI VẤN\n吗 (ma): 这是你的桌子吗？/zhè shì nǐ de zhuōzi ma?/: Đây là bạn của bạn à?\n呢 (ne): 我是老师，你呢？/wǒ shì lǎoshī, nǐ ne?/: Tôi là giáo viên, còn bạn?\n谁 (shéi): 那个人是谁？/nàge rén shì shéi?/: Người kia là ai vậy?\n哪 (nǎ): 这些被子，你喜欢哪一个？ /zhèxiē bēizi, nǐ xǐhuan nǎ yí ge?/: Trong\nnhững cái cốc này, bạn thích cái nào?\n哪儿 (nǎr): 你想去哪儿？/nǐ xiǎng qù nǎr?/: Bạn muốn đi đâu?\n什么 (shénme): 你爱吃什么水果？/nǐ ài chī shénme shuǐguǒ?/: B ạn thích ăn trài\ncây gì?\n多少 (duōshao): 你们学校有多少学生？/nǐmen xuéxiào yǒu duōshao xuésheng?/:\nTrường các bạn có bao nhiêu học sinh\n几 (jǐ) : 你几岁了? /nǐ jǐ suì le?/: Bạn bao nhiêu tuổi rồi?\n怎么 (zěnme): 你怎么了？/nǐ zěnme le?/: Bạn sao thế?\n怎么样 (zěnmeyàng): 这本书怎么样？/zhè běn shū zěnmeyàng?/: Quyển sách này\nnhư thế nào?\nBài hoc bổ sung về cách đặt câu hỏi trong tiếng Trung:\ndai.htm\nXI. CÂU CẦU KHIẾN\n请 (qǐng): 请坐 /qǐng zuò/: Mời ngồi\nXII. CÂU CẢM THÁN\n太 (tài): 太好了！ /tài hǎo le/: Quá tốt rồi\nBài học bổ sung:\nva-tai.htm\nXII. CÁC DẠNG CÂU ĐẶC BIỆT",
            "ex_cn": "不 (bù): 他不在饭店 /tā bú zài fàndiàn/: Anh ấy không ở khách sạn",
            "ex_py": "",
            "ex_vi": "",
            "source": "Tổng hợp ngữ pháp hsk1.pdf",
            "page": ""
        },
        {
            "structure": "1. Câu chữ “是”",
            "usage": "他是我的同学 /tā shì wó de tóngxué/: Anh ấy là bạn học của tôi",
            "ex_cn": "他是我的同学 /tā shì wó de tóngxué/: Anh ấy là bạn học của tôi",
            "ex_py": "",
            "ex_vi": "",
            "source": "Tổng hợp ngữ pháp hsk1.pdf",
            "page": ""
        },
        {
            "structure": "2. Câu chữ “有”",
            "usage": "一年有 12 个月 /yìnián yǒu shí èr ge yuè/: Một năm có 12 tháng\n2. Mẫu câu “是……的”：\nDùng để nhấn mạnh thời gian, địa điểm, đối tượng, cách thức của động tác đã xảy\nra trong quá khứ\n- Nhấn mạnh thời gian:\n我是昨天来的 /wǒ shì zuótiān lái de/: Tôi đến từ hôm qua\n- Nhấn mạnh địa điểm:\n这是在火车站买的 /zhè shì zài huǒchēzhàn mǎi de/: Đây là đồ mua ở trạm xe lửa\n- Nhấn mạnh phương thức:\n他是坐飞机来的 /tā shì zuò fēijī lái de/: Anh ta đi máy bay đến\nXIII. TRẠNG THÁI CỦA HÀNH ĐỘNG\n- Dùng “在……呢” biểu thị hành động đang tiếp diễn:\n他们在吃饭呢 /tāmen zài chīfàn ne/: Họ đang ăn cơm",
            "ex_cn": "一年有 12 个月 /yìnián yǒu shí èr ge yuè/: Một năm có 12 tháng",
            "ex_py": "Dùng để nhấn mạnh thời gian, địa điểm, đối tượng, cách thức của động tác đã xảy",
            "ex_vi": "ra trong quá khứ",
            "source": "Tổng hợp ngữ pháp hsk1.pdf",
            "page": ""
        }
    ],
    "hsk2": [
        {
            "structure": "1.1. Đại từ nhân xưngNgoài những đại từ nhân xưng đã xuất hiện ở cấp độ",
            "usage": "HSK 1 như:\n我，你，我\n们，你们，\n他，她，他\n们，她们\nthì ngữ pháp tiếng trung HSK2 bạn cần námthêm các đại từ nhânxưng sau:\nHán tự Phiênâm\nNghĩa Ví dụ\n大家 dàjiā mọi người 大家好，我是小王。\ndàjiā h ǎ o, w ǒ shìXi ǎ o Wáng\nXin chào mọingười, tôi là TiềuVương\n您 n ǐ n ngài (dùng để xưng hô với đối phương- người cóvị trí hoặc tuổi tác cao hơn, thể hiện sự kính trọng)\n您好。\nnín h ǎ o.\nChào ngài\n它 tā đại từ ngôi thứ ba số ít, chỉ đồ vật, con vật 它是猫。\ntā shì māo\nNó là con mèo\n它\n们 tāmen đại từ ngôi thứ ba số nhiều, chỉ đồ vật, con vật\n它\n们都是猫。\ntāmen dōu shì māo\nChúng nó đều làmèo",
            "ex_cn": "我，你，我",
            "ex_py": "thì ngữ pháp tiếng trung HSK2 bạn cần námthêm các đại từ nhânxưng sau:",
            "ex_vi": "",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "1.2. Đại từ chỉ thị:",
            "usage": "这，那，那儿，这儿，哪儿每 / měi: mỗi\nVí dụ:\n他每天 5 点起床。\ntā měitiān 5 di ǎ n q ǐ chuáng.\nMỗi ngày anh ấy dậy lúc 5 giờ.\\",
            "ex_cn": "这，那，那儿，这儿，哪儿每 / měi: mỗi",
            "ex_py": "Ví dụ:",
            "ex_vi": "tā měitiān 5 di ǎ n q ǐ chuáng.",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "1.3. Đại từ nghi vấn",
            "usage": "Các đại từ nghi vấn đã học ỏ HSK 1 là:\n谁，什么，哪，哪儿，多\n少，几，怎么，怎么\n样\n.\nỞ ngữ pháp tiếng Trung HSK2 chúng ta cần nắm thêm\ncách dùng với từ\n为\n/\nwèi: vì càigì?\nVí dụ:\n为你们的幸福干杯。\nWèi n ǐ men de xìngfú gānbēi.\nCạn ly vì hạnh phúc của các bạn.",
            "ex_cn": "谁，什么，哪，哪儿，多",
            "ex_py": "Ở ngữ pháp tiếng Trung HSK2 chúng ta cần nắm thêm",
            "ex_vi": "",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "2. Chữ số trong ngữ pháp HSK 2",
            "usage": "Biểu thị thứ tự● 第 + số đếm● 第一 / dì yī/: thứ nhất● 第二 / dì èr/:thứ 2● 第三 / dì sān/: thứ 3● ….\nBiểu thị trọng lượng● 3 公斤 /3 gōngjīn/: 3 kg",
            "ex_cn": "Biểu thị thứ tự● 第 + số đếm● 第一 / dì yī/: thứ nhất● 第二 / dì èr/:thứ 2● 第三 / dì sān/: thứ 3● ….",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "3. Lượng từ",
            "usage": "Dùng sau số từ等一下 / děng yīxià/: đợi một chút\nDùng sau “ 每 ”\n每次 / měi cì/: mỗi lần",
            "ex_cn": "Dùng sau số từ等一下 / děng yīxià/: đợi một chút",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "4.1. Phó từ phủ định:",
            "usage": "别\n/\nbié/: đừng làm gì\n你\n别去出来。\n/n ǐ bié qù chūlái./\nBạn đừng ra ngoài",
            "ex_cn": "别",
            "ex_py": "bié/: đừng làm gì",
            "ex_vi": "",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "4.2. Phó từ chỉ mức độ:● 非常 / fēicháng /: vô cùng",
            "usage": "这条裙子非常好看。\nZhè tiáo qúnzi fēicháng h ǎ okàn.\nCái váy này vô cùng đẹp\n● 最 / zuì /: nhất\n我最喜\n欢吃饺子。\nW ǒ zuì x ǐ huān chī ji ǎ ozi.\nTôi thích ăn bánh cảo nhất",
            "ex_cn": "这条裙子非常好看。",
            "ex_py": "Zhè tiáo qúnzi fēicháng h ǎ okàn.",
            "ex_vi": "Cái váy này vô cùng đẹp",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "4.3. Phó từ chỉ phạm vi一起 / yīq ǐ /: cùng nhau",
            "usage": "我和朋友一起学\n习。\nW ǒ hé péngy ǒ u yīq ǐ xuéxí\nTôi và bạn bè cùng nhau học tập\n4. 4. Phó từ chỉ thời gian● 正在 / zhèngzài /: diễn tả hành động đang diễn ra, nhấnmạnh quá trình\n我正在写\n汉字。\nw ǒ zhèngzài xiě hànzì\nTôi đang viết chữ Hán\n●\n已\n经\n/\ny\nǐ\njīng /: diễn tả hành động đã xảy ra\n他已\n经回家了。\ntā y ǐ jīng huí jiāle\nAnh ấy đã về nhà rồi\n● 就 / jiù /: là,mà,.. diễn ra sự việc sẽ diễn ra trongthời điểm đó, hoặc nối tiếphành động trước\n我 7 点就上学了。\nw ǒ 7 di ǎ n jiù shàngxuéle\n7 giờ là tôi đi học rồi",
            "ex_cn": "我和朋友一起学",
            "ex_py": "W ǒ hé péngy ǒ u yīq ǐ xuéxí",
            "ex_vi": "Tôi và bạn bè cùng nhau học tập",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "4.5. Phó từ chỉ ngữ khí● 也 / yě/: cũng",
            "usage": "我也有一本\n这样的书。\nw ǒ yěy ǒ u yī běn zhèyàng de shū.\nTôi cũng có 1 quyển sách như thế này\n●\n还\n/\nhái/: vẫn\n他\n还没吃完。\nTā hái méi chī wán.\nAnh ấy vẫn chưa ăn xong\n● 真 / zhēn/: thật là\n小美真漂亮。\nXi ǎ o Měi zhēn piàoliang\nTiểu Mỹ thật xinh đẹp",
            "ex_cn": "我也有一本",
            "ex_py": "w ǒ yěy ǒ u yī běn zhèyàng de shū.",
            "ex_vi": "Tôi cũng có 1 quyển sách như thế này",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "4.5. Phó từ chỉ tần suất: 再 / zài/: lại, diễn tả sựlặp lại我明天再来。",
            "usage": "W ǒ míngtiān zài lái\nNgày mai tôi lại đến",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "5. Liên từ trong tiếng Trung",
            "usage": "●\n因\n为\n/\nyīnwèi /…\n所以\n/\nsu\nǒ\ny\nǐ\n/: Bời vì…thế nên\n因\n为雨很大所以我们不能去公园跑步。\nyīnwèi y ǔ hěn dà su ǒ y ǐ w ǒ men bùnéng qù gōngyuán p ǎ obù.\nBởi vì mưa rất to nên chúng tôi không thể đến côngviên chạy bộ.\n● 但是 / dànshì/: nhưng mà\n他\n岁了，但是身体很好。\ntā 70 suì le, dànshì shēnt ǐ hěn h ǎ",
            "ex_cn": "因",
            "ex_py": "yīnwèi /…",
            "ex_vi": "",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "6. Giới từ",
            "usage": "Hán tự/ Cấu trúc Phiênâm\nNghĩa Ví dụ\n从 … cóng từ…đến\n从\n这里到公园还有\n公里。\nCóng zhèl ǐ dào gōngyuánhái y ǒ u 2 gōngl ǐ\nTừ đây đến công viên còn2km.\n对\nChủ ngữ +\n对\n+\ntân ngữ +động từ/ tính từ\nduì đối với…\n经常锻炼对身体很好。\njīngcháng duànliàn duìshēnt ǐ hěn h ǎ o\nThường xuyên luyện tập rấttốt cho cơ thể.\n比 b ǐ so với… (dùng để sosánh)\n我比他高。\nw ǒ b ǐ tā gāo.\nTôi cao hơn anh ấy.\n向 xiàng hướng…(dùng để chỉphương hướng)\n小王向老\n师感谢。\nXi ǎ o Wáng xiàng l ǎ oshīg ǎ nxiè.\nTiều Vương cảm ơn giáoviên\n离 lí cách….\n学校离我家很\n远。\nXuéxiào lí w ǒ jiā hěn yu ǎ n.\nTrường học cách nhà củatôi rất xa",
            "ex_cn": "从 … cóng từ…đến",
            "ex_py": "Cóng zhèl ǐ dào gōngyuánhái y ǒ u 2 gōngl ǐ",
            "ex_vi": "",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "7. Trợ động từ",
            "usage": "● 可以 / kěy ǐ /: có thể\n等我做完就可以吃了。\nDěng w ǒ zuò wán jiù kěy ǐ chīle\nĐợi tôi làm xong là có thể ăn rồi\n● 要 / yào/: phải\n我要走了。\nw ǒ yào z ǒ ule.\nTôi phải đi rồi.\n● 可能 / kěnéng/: có khả năng\n明天可能\n风大。\nMíngtiān kěnéng fēng dà\nNgày mai có thể có gió lớn",
            "ex_cn": "● 可以 / kěy ǐ /: có thể",
            "ex_py": "Děng w ǒ zuò wán jiù kěy ǐ chīle",
            "ex_vi": "Đợi tôi làm xong là có thể ăn rồi",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "8. Trợ từ",
            "usage": "Trợ từ kết cấu: 得 ( dé): dùng trong trường hợp muốnnhận xét hoặc đánh giá vềmột hành động, trạng tháiĐộng từ + 得 （ 很 / 非常 / 不 … ） + tính từ\n你做得好。\nn ǐ zuò dé h ǎ o\nBạn làm rất tốt.",
            "ex_cn": "Trợ từ kết cấu: 得 ( dé): dùng trong trường hợp muốnnhận xét hoặc đánh giá vềmột hành động, trạng tháiĐộng từ + 得 （ 很 / 非常 / 不 … ） + tính từ",
            "ex_py": "n ǐ zuò dé h ǎ o",
            "ex_vi": "Bạn làm rất tốt.",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "8.1. Trợ từ ngữ khí吧 / ba/: dùng trong câu biểu thị sự yêu cầu, thúc giụcmang ngữ khí nhẹ nhàng",
            "usage": "快睡\n觉吧。\nkuài shuìjiào ba\nMau đi ngủ đi.",
            "ex_cn": "快睡",
            "ex_py": "kuài shuìjiào ba",
            "ex_vi": "Mau đi ngủ đi.",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "8.2. Trợ từ động thái",
            "usage": "● 着 / zhe/: biểu thị sự tiếp diễn của động tác hay trạng thái\n他在学校\n门口站着。\nTā zài xuéxiào ménk ǒ u zhàn zhe\n●\n过\n/\nguò/: biểu thị động tác đã xong, hoàn tất hoặcbiểu thị sự việc ở trongquán khứ và không còn tiếp diễn ở hiện tại.\n我来\n过中国。\nw ǒ lái guò Zhōngguó",
            "ex_cn": "● 着 / zhe/: biểu thị sự tiếp diễn của động tác hay trạng thái",
            "ex_py": "Tā zài xuéxiào ménk ǒ u zhàn zhe",
            "ex_vi": "●",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "9. Thán từ",
            "usage": "喂 / wèi/: alo\n喂，你好\nwèi, n ǐ h ǎ o",
            "ex_cn": "喂 / wèi/: alo",
            "ex_py": "wèi, n ǐ h ǎ o",
            "ex_vi": "",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "10. Động từ trùng điệp",
            "usage": "Động từ lặp lại dùng để biểu đạt động tác tiếp diễntrong thời gian ngắn. Đại đa sốđộng từ đều có thể lặp lại, nhưng chúng ta cần chúý hình thức lặp lại và ngữ cảnh sửdụng.\n● A 一 A\n试一试\n/\nshì yī shì/: thử\n● AB-AB\n学\n习学习\n/\nxuéxí xuéxí/: Học tập\n● AAB\n唱歌 – 唱唱歌 / chàng chànggē/: ca hát",
            "ex_cn": "● A 一 A",
            "ex_py": "shì yī shì/: thử",
            "ex_vi": "● AB-AB",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "11. Câu nghi vấn",
            "usage": "● 吧 / ba/: Khi đối với một sự việc nào đó đã có dự đoán trước nhưng chưachắc chắn thì dùng trợ “ 吧 ” từ để hỏi\n你是越南人吧？\nN ǐ shì yuènán rén ba\nBạn là người Việt Nam nhỉ?\n●\n为\n什么\n/\nwèishéme/: vì sao\n他\n为什么没来？\ntā wèishéme méi lái\n● Câu hỏi chính phản\n你吃不吃包子？\nn ǐ chī bù chī bāozi?\nBạn có ăn bánh bao không?\n●\n好\n吗\n/\nh\nǎ\no ma/ : được không?\n明天\n点\n见，好吗？\nMíngtiān 8 di ǎ n jiàn, h ǎ o ma\n8 giờ ngày mai gặp, được không?",
            "ex_cn": "● 吧 / ba/: Khi đối với một sự việc nào đó đã có dự đoán trước nhưng chưachắc chắn thì dùng trợ “ 吧 ” từ để hỏi",
            "ex_py": "N ǐ shì yuènán rén ba",
            "ex_vi": "Bạn là người Việt Nam nhỉ?",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "12. Câu cầu khiến",
            "usage": "不要 / bùyào/ : biểu thị sự khuyên nhủ\nVí dụ:\n不要吃太多。\nBùyào chī tài duō.\nĐừng ăn quá nhiều",
            "ex_cn": "不要 / bùyào/ : biểu thị sự khuyên nhủ",
            "ex_py": "Ví dụ:",
            "ex_vi": "Bùyào chī tài duō.",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "13. Câu cảm thán",
            "usage": "真 / zhēn /: thật là\n真好吃。\nZhēn hào chī.\nThật là ngon\n14. Các câu dạng đặc biệt\nCâu so sánh: A 比 B+tính từ\n他比我大。\nTā b ǐ w ǒ dà.\nAnh ấy lớn hơn tôi",
            "ex_cn": "真 / zhēn /: thật là",
            "ex_py": "Zhēn hào chī.",
            "ex_vi": "Thật là ngon",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "15. Trạng thái của hành động",
            "usage": "● 正在 / zhèngzài/: biểu thị hành động đang diễn ra\n他\n们正在踢足球。\nTāmen zhèngzài tī zúqiú\nBọn họ đang đá bóng\n● 要 … 了 / yào…le/ : biểu thị sự việc sắp xảy ra\n飞机要起飞了。\nfēijī yào q ǐ fēile\nMáy bay sắp cất cánh rồi\n● 着 / zhe/: biểu thị sự tiếp diễn của hành động hay trạngthái\n外面下着雨。\nwài miàn xià zhe y ǔ\nBên ngoài đang đổ mưa",
            "ex_cn": "● 正在 / zhèngzài/: biểu thị hành động đang diễn ra",
            "ex_py": "Tāmen zhèngzài tī zúqiú",
            "ex_vi": "Bọn họ đang đá bóng",
            "source": "Ngữ pháp HSK 2.pdf",
            "page": ""
        },
        {
            "structure": "1. Trợ động từ 要",
            "usage": "要 được dùng trước động từ để cho biết người nào đó có nguyện vọng thực hiện việc gì. Ví dụ:\nChủ ngữ\nTrợ động từ 要\nVị ngữ\n王方\n要\n学习汉语。\n我\n要\n吃米饭。\n我们\n要不要\n买几个新的椅子？\nỞ dạng phủ định, người ta thường dùng 不想. Ví dụ:\n( 1 ) 小王要去，我不想去。\n( 2 ) A: 你要吃米饭吗？\nB: 我不想吃米饭。\n( 3 ) A: 我要去商店买椅子，你去吗？\nB: 我不去，我不想买椅子。",
            "ex_cn": "要 được dùng trước động từ để cho biết người nào đó có nguyện vọng thực hiện việc gì. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "2. Phó từ chỉ mức độ 最",
            "usage": "最 có nghĩa là giữ vị trí hàng đầu trong các sự vật cùng loại, giữ vị trí thứ nhất xét về khía cạnh nào đó. Ví dụ:\n( 1 ) 大卫的汉语最好。\n( 2 ) 我最喜欢吃米饭。\n( 3 ) 它的眼睛最漂亮。",
            "ex_cn": "最 có nghĩa là giữ vị trí hàng đầu trong các sự vật cùng loại, giữ vị trí thứ nhất xét về khía cạnh nào đó. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "3. Cách diễn tả số ước lượng 几 và 多",
            "usage": "几 được dùng để chỉ con số không xác định nhỏ hơn 10, phía sau phải có lượng từ. Ví dụ:\n几\n量词　Lượng từ\n名词 Danh từ\n几\n个\n人\n几\n本\n书\n几\n个\n新的椅子\n( 1 ) 车上有几个人。\n( 2 ) 我想买几本书。\n( 3 ) 我们要不要买几个新的椅子？\n几 được dùng sau 十 để chỉ con số lớn hơn 10 và nhỏ hơn 20, ví dụ 十几个人　(mười mấy người). Ngoài ra, nó cũng được dùng trước 十 để chỉ con số lớn hơn 20 và nhỏ hơn 100, ví dụ 几十个人 (mấy chục người).\n多 được dùng khi nói về số lượng. Nếu đề cập đến con số nhỏ hơn 10, ta dùng 多 sau lượng từ. Ví dụ:\n数词 Từ chỉ số đếm\n量词 Lượng từ\n多\n名词 Danh từ\n三\n个\n多\n星期\n五\n年\n多\n六\n个\n多\n月\nKhi nói về con số hàng chục lớn hơn 10, ta dùng 多 trước lượng từ. Trong trường hợp này, 多 và 几 có thể được dùng thay thế cho nhau. Ví dụ:\n数词\n多\n量词\n名词\n十\n多·\n个\n月\n二十\n多\n块\n钱\n八十\n多\n个\n人\nNgữ pháp HSK 2 Phần 2:",
            "ex_cn": "几 được dùng để chỉ con số không xác định nhỏ hơn 10, phía sau phải có lượng từ. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "1. Câu hỏi với 是不是",
            "usage": "Khi đặt câu hỏi với sự phỏng đoán khá chắc chắn về một sự việc hay tình huống nào đó thì ta có thể sử dụng mẫu câu này để khẳng định điều mình suy đoán. 是不是 thường được dùng trước vị ngữ nhưng cũng có thể đứng ở đầu câu hay cuối câu. Ví dụ:\n( 1 ) 你很少生病，是不是喜欢运动？\n( 2 ) 是不是明天爸爸休息?\n( 3 ) 我们星期一去北京, 是不是？",
            "ex_cn": "Khi đặt câu hỏi với sự phỏng đoán khá chắc chắn về một sự việc hay tình huống nào đó thì ta có thể sử dụng mẫu câu này để khẳng định điều mình suy đoán. 是不是 thường được dùng trước vị ngữ nhưng cũng có thể đứng ở đầu câu hay cuối câu. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "2. Đại từ 每",
            "usage": "每 được dùng trước lượng từ để chỉ một cá thể hay một nhóm bất kỳ trong tổng thể, ví dụ: 每天 (mỗi ngày)　每年 (mỗi năm)　每个月 (mỗi tháng)　每个星期 (mỗi tuần).\n( 1 ) 山姆每年都去中国旅行。\n( 2 ) 你每个星期六都工作吗？\n( 3 ) 我每天六点起床。",
            "ex_cn": "每 được dùng trước lượng từ để chỉ một cá thể hay một nhóm bất kỳ trong tổng thể, ví dụ: 每天 (mỗi ngày)　每年 (mỗi năm)　每个月 (mỗi tháng)　每个星期 (mỗi tuần).",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "3. Đại từ nghi vấn 多",
            "usage": "Đại từ nghi vấn 多 được dùng trước tính từ để hỏi về mức độ. Khi trả lời, ta phải nêu số lượng cụ thể. Ví dụ:\nChủ ngữ\n多\n形容词 Tính từ\n你\n多\n大？\n大卫\n多\n高？\n他\n多\n高？\n( 1 ) A: 你多大？\nB: 我 16 岁。\n( 2 ) A: 王医生的儿子多高？\nB: 他儿子一米七。\n( 3 ) A: 他多高？\nB: 一米八几。\nPhần 3:",
            "ex_cn": "Đại từ nghi vấn 多 được dùng trước tính từ để hỏi về mức độ. Khi trả lời, ta phải nêu số lượng cụ thể. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "1. Cụm từ có 的",
            "usage": "Đại từ, tính từ hay động từ ... kết hợp với 的　sẽ tạo thành cụm từ có tính chất như danh từ (cụm danh từ), trong đó thành phần trọng tâm được lược bỏ. Ví dụ:\n这本书不是我的。(= 我的书)\n这个杯子是昨天买的。( = 昨天买的杯子)\n这块手表是你的吗？(= 你的手表)",
            "ex_cn": "Đại từ, tính từ hay động từ ... kết hợp với 的　sẽ tạo thành cụm từ có tính chất như danh từ (cụm danh từ), trong đó thành phần trọng tâm được lược bỏ. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "2. Cách dùng 一下",
            "usage": "一下　được dùng sau động từ để diễn tả hành động xảy ra trong thời gian ngắn tương đương với việc lặp lại động từ. Trong trường hợp này, ta có thể lược bỏ tân ngữ. Ví dụ:\nChủ ngữ\nĐộng từ\n一下\nTân ngữ\n我\n看\n一下。\n你\n休息\n一下吧。\n我\n问\n一下\n老师。",
            "ex_cn": "一下　được dùng sau động từ để diễn tả hành động xảy ra trong thời gian ngắn tương đương với việc lặp lại động từ. Trong trường hợp này, ta có thể lược bỏ tân ngữ. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "3. Phó từ ngữ khí 真",
            "usage": "真 + tính từ được dùng để thể hiện cảm xúc. 真 có nghĩa là thật, quả là. Ví dụ:\n( 1 )　你真好！\n( 2 )　今天天气真好！\n( 3 )　你女儿的房间真漂亮！\nPhần 4:",
            "ex_cn": "真 + tính từ được dùng để thể hiện cảm xúc. 真 có nghĩa là thật, quả là. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "1. Cấu trúc 是。。。的: nhấn mạnh chủ thể thực hiện hành động.",
            "usage": "Khi biết rõ sự việc nào đó, ta có thể dùng cấu trúc 是。。。的 để nhấn mạnh chủ thể thực hiện hành động. Ví dụ:\nTân ngữ\nĐộng từ　是\n谁\n动作 hành động\n的\n这本书\n是\n我\n买\n的。\n晚饭\n是\n妈妈\n做\n的。\n电话\n是\n谁\n打\n的。\nỞ dạng phủ định, ta thêm 不vào trước 是. Ví dụ:\nTân ngữ\n不\n是\n谁\n动作hành động\n的\n这个汉字\n不\n是\n大卫\n写\n的。\n苹果\n不\n是\n王方\n买\n的。\n电话\n不\n是\n我\n接\n的。",
            "ex_cn": "Khi biết rõ sự việc nào đó, ta có thể dùng cấu trúc 是。。。的 để nhấn mạnh chủ thể thực hiện hành động. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "2. Cấu trúc diễn tả thời gian ·····的时候",
            "usage": "Để diễn tả thời gian, ta dùng cấu trúc sau: cụm từ chỉ số lượng + 的时候. Ví dụ:\n今天早上八点的时候我没在家。\n我十八岁的时候一个人来到北京。\n我十一岁的时候开始踢足球。\nCấu trúc động từ + 的时候 cũng được sử dụng để nói về thời gian. Ví dụ:\n( 1 ) 我睡觉的时候，我妈妈在做饭。\n( 2 ) 麦克到学校的时候下雨了。\n( 3 ) 王老师工作的时候，她丈夫开车去医院了。",
            "ex_cn": "Để diễn tả thời gian, ta dùng cấu trúc sau: cụm từ chỉ số lượng + 的时候. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "3. Phó từ chỉ thời gian 已经",
            "usage": "已经 diễn tả hành động đã hoàn thành hay đạt đến mức độ nào đó. Ví dụ:\n( 1 ) 王老师已经回家了。\n( 2 ) 我的身体已经好了。\n( 3 ) 足球我已经踢了十年了。\nNgữ pháp HSK 2 Phần 5:",
            "ex_cn": "已经 diễn tả hành động đã hoàn thành hay đạt đến mức độ nào đó. Ví dụ:",
            "ex_py": "Ngữ pháp HSK 2 Phần 5:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "1. Phó từ 就",
            "usage": "Cấu trúc “就 + động từ” được dùng để kết nối với nội dung trước đo và đưa ra kết luận hoặc giải pháp. Ví dụ:\n你不想去，就在家休息吧。\n这儿的咖啡不错，就喝咖啡吧。\n就做你爱吃的鱼吧。",
            "ex_cn": "Cấu trúc “就 + động từ” được dùng để kết nối với nội dung trước đo và đưa ra kết luận hoặc giải pháp. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "2. Phó từ ngữ khí 还 (1)",
            "usage": "Cấu trúc “还 + tính từ” diễn tả ý có thể chấp nhận được, tàm tạm. Ví dụ:\n(1) A: 你身体怎么样？\nB: 还好。\n(2) A: 这件衣服大吗？\nB: 还行，不太大。\n(3) A: 昨天的考试怎么样？\nB: 我觉得听和说还可以，读和写不好。",
            "ex_cn": "Cấu trúc “还 + tính từ” diễn tả ý có thể chấp nhận được, tàm tạm. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "3. Phó từ chỉ mức độ 有点儿",
            "usage": "Cấu trúc “有点儿 + động từ/tính từ” thường được dùng để diễn tả cảm xúc tiêu cực hay thái độ không hài lòng của người nói. Ví dụ:\n今天天气有点儿冷。\n我昨天有点儿累。\n(这件衣服)有点儿大。\nNgữ pháp HSK 2 Phần 6:",
            "ex_cn": "Cấu trúc “有点儿 + động từ/tính từ” thường được dùng để diễn tả cảm xúc tiêu cực hay thái độ không hài lòng của người nói. Ví dụ:",
            "ex_py": "Ngữ pháp HSK 2 Phần 6:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "1. Đại từ nghi vấn 怎么",
            "usage": "Cấu trúc “怎么 + động từ/tính từ” được dùng để hỏi về nguyên nhân của sự việc nào đó và thường diễn tả thái độ ngạc nhiên. Ví dụ:\nChủ ngữ\nVị ngữ\n怎么\nđộng từ/tính từ\n你\n怎么\n不高兴？\n今天\n怎么\n这么热？\n昨天你们\n怎么\n都没去打篮球？",
            "ex_cn": "Cấu trúc “怎么 + động từ/tính từ” được dùng để hỏi về nguyên nhân của sự việc nào đó và thường diễn tả thái độ ngạc nhiên. Ví dụ:",
            "ex_py": "động từ/tính từ",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "2. Sự lặp lại lượng từ",
            "usage": "Khi được lặp lại, lượng từ có nghĩa là mỗi/mọi. Cách này được dùng để nhấn mạnh rằng mọi thành viên/sự vật trong nhóm nào đó đều có một điểm chung. Sau lượng từ, người ta thường dùng 都. Ví dụ:\nChủ ngữ\nLượng từ được lặp lại\n都······\n同学们\n个个\n都很高兴。\n这个商店的衣服\n件件\n都很漂亮。\n这个星期（我）\n天天\n都吃羊肉。",
            "ex_cn": "Khi được lặp lại, lượng từ có nghĩa là mỗi/mọi. Cách này được dùng để nhấn mạnh rằng mọi thành viên/sự vật trong nhóm nào đó đều có một điểm chung. Sau lượng từ, người ta thường dùng 都. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "3. Cấu trúc 因为······,　所以······",
            "usage": "Hai liên từ 因为 và所以 được dùng để nối hai mệnh đề có quan hệ nhân quả, trong đó mệnh đề thứ nhất diễn tả nguyên nhân còn mệnh đề thứ hai diễn tả kết quả. Khi đặt câu, ta có thể dùng cả hai liên từ này hoặc chỉ cần dùng một trong hai liên từ. Ví dụ:\n因为······\n所以······\n因为她生病了，\n所以没去学校。\n因为他每天跑步，\n所以身体很好。\n因为昨天下雨，\n所以我们都没去打篮球。\nNgữ pháp HSK 2 Phần 7:",
            "ex_cn": "Hai liên từ 因为 và所以 được dùng để nối hai mệnh đề có quan hệ nhân quả, trong đó mệnh đề thứ nhất diễn tả nguyên nhân còn mệnh đề thứ hai diễn tả kết quả. Khi đặt câu, ta có thể dùng cả hai liên từ này hoặc chỉ cần dùng một trong hai liên từ.",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "1. Phó từ ngữ khí 还 (2)",
            "usage": "还 được dùng để chỉ sự tiếp diễn của hành động hay trạng thái. Dạng phủ định của nó là 还没。Ví dụ:\n八点了，他还在睡觉。\n你怎么还没吃饭？\n他还在教室学习呢。",
            "ex_cn": "还 được dùng để chỉ sự tiếp diễn của hành động hay trạng thái. Dạng phủ định của nó là 还没。Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "2. Phó từ chỉ thời gian 就",
            "usage": "就 được dùng để nhấn mạnh, cho biết sự việc nào đó xảy ra sớm hay diễn ra nhanh chóng và thuận lợi theo quan điểm của người nói. Ví dụ:\nChủ ngữ\n就······了\n同学们\n七点半就来教室了。\n我\n坐飞机一个半小时就到北京了。\n我\n二十分钟就到。",
            "ex_cn": "就 được dùng để nhấn mạnh, cho biết sự việc nào đó xảy ra sớm hay diễn ra nhanh chóng và thuận lợi theo quan điểm của người nói. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "3. Động từ 离",
            "usage": "离 được dùng để chỉ khoảng cách trong mối tương quan với một địa điểm, mốc thời gian hay mục đích. Ví dụ:\nA\n离\nB\n······\n我家\n离\n学校\n很远。\n学校\n离\n机场\n有20 多公里。\n离\n我的生日\n还有一个多星期呢！",
            "ex_cn": "离 được dùng để chỉ khoảng cách trong mối tương quan với một địa điểm, mốc thời gian hay mục đích. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "4. Trợ từ ngữ khí 呢",
            "usage": "呢 được dùng ở cuối câu trần thuật hoặc sau câu có vị ngữ là tính từ/động từ để xác nhận sự việc và thuyết phục người khác, có ý cường điệu. Ví dụ:\n八点上课，时间还早呢。\n医院离我们这儿还远呢。\n坐公共汽车要一个多小时呢！\nNgữ pháp HSK 2 Phần 8:",
            "ex_cn": "呢 được dùng ở cuối câu trần thuật hoặc sau câu có vị ngữ là tính từ/động từ để xác nhận sự việc và thuyết phục người khác, có ý cường điệu. Ví dụ:",
            "ex_py": "Ngữ pháp HSK 2 Phần 8:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "1. Câu hỏi có cấu trúc: ·····, 好吗？",
            "usage": "Mẫu câu này thường được dùng để hỏi ý kiến, quan điểm của người khác. Ví dụ:\n我们一起去吃饭，好吗？\n你明天下午给我打电话，好吗？\n我们下午去看电影，好吗？",
            "ex_cn": "我们一起去吃饭，好吗？",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "2. Phó từ 再",
            "usage": "再 được sử dụng để diễn tả một hành động/trạng thái được lặp lại hay tiếp tục diễn ra. Nó cũng được dùng để chỉ một hành động sẽ xảy ra trong tình huống nào đó. Ví dụ:\nChủ ngữ\nVị ngữ\n再\nĐộng từ + Tân ngữ\n你\n再\n看看这本书吧。\n你\n(明天) 再\n给我打电话吧。\n(你)\n(让我想想) 再\n告诉你。",
            "ex_cn": "再 được sử dụng để diễn tả một hành động/trạng thái được lặp lại hay tiếp tục diễn ra. Nó cũng được dùng để chỉ một hành động sẽ xảy ra trong tình huống nào đó. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "3. Câu kiêm ngữ",
            "usage": "Trong mẫu câu này, vị ngữ được tạo thành bởi 2 cụm động từ, tân ngữ của động từ thứ nhất là chủ ngữ của động từ thứ hai. Động từ thứ nhất thường là các từ: 请 (mời), 让 (để, bảo), 叫 (gọi, bảo). Ví dụ:\nChủ ngữ\nĐộng từ\nTân ngữ/Chủ ngữ\nVị ngữ\n我\n请\n你\n吃饭。\n你\n让\n我\n再想想。\n我\n叫\n人\n去看看。",
            "ex_cn": "Trong mẫu câu này, vị ngữ được tạo thành bởi 2 cụm động từ, tân ngữ của động từ thứ nhất là chủ ngữ của động từ thứ hai. Động từ thứ nhất thường là các từ: 请 (mời), 让 (để, bảo), 叫 (gọi, bảo). Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "4. Sự lặp lại động từ",
            "usage": "Lặp lại động từ được dùng như một cách diễn tả thời gian ngắn, số lượng ít, mức độ nhẹ hay hành động làm thử điều gì đó, mang sắc thái khá nhẹ nhàng, thoải mái và thường xuất hiện trong văn nói. Ví dụ:\nHình thức lặp lại với động từ có một âm tiết:\nĐộng từ\nLặp lại theo cấu trúc động từ + động từ\nLặp lại theo cấu trúc động từ +　一　+ động từ\n说\n说说\n说一说\n听\n听听\n听一听\n看\n看看\n看一看\nHình thức lặp lại với động từ có hai âm tiết:\nĐộng từ\nLặp lại theo cấu trúc động từ + động từ\n学习\n学习学习\n准备\n准备准备\n运动\n运动运动\nNgữ pháp HSK 2 Phần 9",
            "ex_cn": "Lặp lại theo cấu trúc động từ +　一　+ động từ",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "1. Bổ ngữ chỉ kết quả",
            "usage": "Một số động từ hoặc tính từ có thể được dùng sau động từ để bổ sung thông tin, cho biết rõ kết quả của hành động. Chúng được gọi là bổ ngữ chỉ kết quả. Ví dụ:\nChủ ngữ\nVị ngữ\nĐộng từ + Bổ ngữ chỉ kết quả\nTân ngữ\n我\n看见\n你的女朋友了。\n我\n听懂\n今天的汉语课了。\n我\n做好\n饭了。\n大卫\n找到\n工作了。\nĐể có thể phủ định, ta thêm 没有 vào trước động từ, cuối câu không dùng 了. Ví dụ:\nChủ ngữ\nVị ngữ\n没有 + Động từ + Bổ ngữ chỉ kết quả\nTân ngữ\n我\n没有看见\n你的女朋友。\n我\n没听懂\n他说的话。\n我\n没做完\n(考试题)。\nNgười ta thường thêm 了　没有 vào cuối câu để chuyển câu sang thể nghi vấn. Ví dụ:\nChủ ngữ\nVị ngữ\nĐộng từ + Bổ ngữ chỉ kết quả\nTân ngữ + 了没有\n你\n看见\n我的女朋友了没有？\n你\n听懂\n他说的话了没有？\n你\n都做完\n考试题了没有？",
            "ex_cn": "我",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "2. Giới từ 从",
            "usage": "Giới từ 从 cho biết khởi điểm của một khoảng thời gian, quãng đường, một quá trình hay trình tự, thường kết hợp với 到. Ví dụ:\n从\nA\n到\nB\n······\n从\n北京\n到\n上海\n要坐几个小时的飞机？\n从\n老人\n到\n孩子\n都喜欢吃苹果。\n从\n下个星期一\n开始(上班)。",
            "ex_cn": "Giới từ 从 cho biết khởi điểm của một khoảng thời gian, quãng đường, một quá trình hay trình tự, thường kết hợp với 到. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "3. Cách diễn tả thứ tự 第······",
            "usage": "第 thường được dùng trước cụm từ chỉ số lượng để nói về thứ tự. Ví dụ:\n第\n数词 Từ chỉ số đếm\n量词 Lượng từ\n名词 Danh từ\n第\n一\n本\n书\n第\n二\n个\n工作\n第\n一\n次\n跳舞\nPhần 10",
            "ex_cn": "第 thường được dùng trước cụm từ chỉ số lượng để nói về thứ tự. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "1. Câu cầu khiến 不要······了／别······了",
            "usage": "Mẫu câu này được dùng để diễn tả ý ngăn cản hay cấm đoán ai làm việc gì. Ví dụ:\n不要\nĐộng từ + Tân ngữ\n了\n不要\n玩手机\n了。\n不要\n做饭\n了。\n不要\n看电视\n了。\n别\nĐộng từ + Tân ngữ\n了\n别\n睡觉\n了。\n别\n看书\n了。\n别\n看报纸\n了。",
            "ex_cn": "不要",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "2. Giới từ 对",
            "usage": "Giới từ 对có thể được dùng để chỉ mối tương quan giữa người và người, người và sự vật, sự vật và sự vật. Ví dụ:\nChủ ngữ\nVị ngữ\n对\nTân ngữ\nĐộng từ/tính từ\n跑步\n对\n身体\n很好。\n老师\n对\n学生\n非常好。\n看电视\n对\n学汉语\n有帮助。\nNgữ pháp HSK 2 Phần 11",
            "ex_cn": "Giới từ 对có thể được dùng để chỉ mối tương quan giữa người và người, người và sự vật, sự vật và sự vật. Ví dụ:",
            "ex_py": "Động từ/tính từ",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "1. Cấu trúc có động từ/cụm động từ làm định ngữ",
            "usage": "Khi động từ hay cụm động từ làm định ngữ, ta phải thêm 的 vào giữa định ngữ và trung tâm ngữ. Ví dụ:\nĐịnh ngữ\n的\nTrung tâm ngữ\n新买\n的\n自行车\n我妈妈做\n的\n饭\n和你一起唱歌\n的\n人",
            "ex_cn": "Khi động từ hay cụm động từ làm định ngữ, ta phải thêm 的 vào giữa định ngữ và trung tâm ngữ. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "2. Câu có từ 比 (1)",
            "usage": "Trong mẫu câu này, 比 được dùng để diễn tả sự so sánh. Vị ngữ của câu có thể là tính từ. Ví dụ:\nA\n比\nB\nTính từ\n哥哥\n比\n姐姐\n高。\n今天\n比\n昨天\n热。\n今天的西瓜\n比\n昨天\n便宜。\nDạng phủ định của mẫu câu trên là A 没有B······Ví dụ:\nA\n没有\nB\nTính từ\n哥哥\n没有\n姐姐\n高。\n今天\n没有\n昨天\n热。\n今天的西瓜\n没有\n昨天\n便宜。\nKhi muốn diễn tả sự chênh lệch (với mức cụ thể) giữa các đối tượng được so sánh, ta dùng số lượng cụ thể. 一点儿 hoặc 一些 được sử dụng để chỉ mức chênh lệch không lớn, 多了hoặc 得多 được sử dụng để chỉ mức chênh lệch lớn. Ví dụ:\nA\n比\nB\nTính từ\nCụm từ chỉ số lượng\n西瓜\n比\n苹果\n贵\n两块钱。\n我的学习\n比\n他\n好\n一点儿。\n今天\n比\n昨天\n热\n得多。\n她\n比\n我们老师\n小\n两岁。",
            "ex_cn": "Trong mẫu câu này, 比 được dùng để diễn tả sự so sánh. Vị ngữ của câu có thể là tính từ. Ví dụ:",
            "ex_py": "Tính từ",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "3. Trợ động từ 可能",
            "usage": "可能 thường được dùng trước động từ hay trước chủ ngữ để diễn tả sự phỏng đoán, mang nghĩa là có lẽ, có thể. Ví dụ:\n(1) 他可能早就知道这件事情了。\n(2) 可能我明天不来上课了。\n(3) 你可能不认识他。\nPhần 12",
            "ex_cn": "可能 thường được dùng trước động từ hay trước chủ ngữ để diễn tả sự phỏng đoán, mang nghĩa là có lẽ, có thể. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "1. Bổ ngữ chỉ trạng thái",
            "usage": "Bổ ngữ chỉ trạng thái được dùng để mô tả hay đánh giá kết quả, mức độ hoặc trạng thái của hành động. Nó đứng sau động từ, giữa nó và động từ thường có trợ từ kết cấu 得. Ví dụ:\nChủ ngữ\nVị ngữ\nĐộng từ\n得\nTính từ\n他\n说\n得\n很好。\n我\n起\n得\n很早。\n我\n睡\n得\n也早。\nNếu động từ có tân ngữ, thì ta phải đặt tân ngữ trước động từ hoặc lặp lại động từ. Ví dụ:\nChủ ngữ\nVị ngữ\n（Động từ +） Tân ngữ\nĐộng từ\n得\nTính từ\n他\n（说）汉语\n说\n得\n很好。\n我\n（写）汉字\n写\n得\n很好。\n姐姐\n（唱）歌\n唱\n得\n不错。\nĐể có câu phủ định, ta đặt từ phủ định sau trợ từ kết cấu 得. Ví dụ:\nChủ ngữ\nVị ngữ\nĐộng từ\n得\nTính từ\n他\n说\n得\n不好。\n我\n起\n得\n不早。\n我\n住\n得\n不远。\nChủ ngữ\nVị ngữ\n（Động từ +） Tân ngữ\nĐộng từ\n得\nTính từ\n他\n（说）汉语\n说\n得\n不好。\n我\n（写）汉字\n写\n得\n不好。\n姐姐\n（唱）歌\n唱\n得\n不太好。\nĐể có câu nghi vấn, ta dùng cấu trúc Tính từ + 不 +Tính từ sau trợ từ kết cấu 得, đây là kiểu câu hỏi phản vấn. Ví dụ:\nChủ ngữ\nVị ngữ\nĐộng từ\n得\nTính từ + 不 +Tính từ\n他\n说\n得\n好不好？\n姐姐\n起\n得\n早不早？\n你\n住\n得\n远不远？",
            "ex_cn": "Bổ ngữ chỉ trạng thái được dùng để mô tả hay đánh giá kết quả, mức độ hoặc trạng thái của hành động. Nó đứng sau động từ, giữa nó và động từ thường có trợ từ kết cấu 得. Ví dụ:",
            "ex_py": "Tính từ",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "2. Câu có từ 比　(2)",
            "usage": "Nếu động từ có bổ ngữ chỉ trạng thái, ta có thể đặt 比 trước động từ hoặc trước bổ ngữ. Ví dụ:\nA\n比\nB\nĐộng từ + 得 + Tính từ\n他\n比\n我\n学得好。\n姐姐\n比\n我\n跑得快。\n我妻子\n比\n我\n做得好。\nA\nĐộng từ + 得\n比\nB\nTính từ\n他\n学得\n比\n我\n好。\n姐姐\n跑得\n比\n我\n快。\n我妻子\n做得\n比\n我\n好。\nNgữ pháp HSK 2 Phần 13",
            "ex_cn": "Nếu động từ có bổ ngữ chỉ trạng thái, ta có thể đặt 比 trước động từ hoặc trước bổ ngữ. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "1. Trợ từ động thái 着",
            "usage": "Động từ kết hợp với trợ từ động thái 着 có thể chỉ sự kéo dài của trạng thái nào đó. Ví dụ:\nChủ ngữ\nVị ngữ\nĐộng từ\n着\nTân ngữ\n门\n开\n着。\n他们\n穿\n着\n红色的衣服。\n她\n拿\n着\n铅笔。\nĐể có dạng phủ định, ta thêm 没 vào trước động từ. Ví dụ:\nChủ ngữ\nVị ngữ\n没 + Động từ\n着\nTân ngữ\n门\n开\n着。\n他们\n穿\n着\n红色的衣服。\n她\n拿\n着\n铅笔。\nĐể chuyển câu sang thể nghi vấn, ta thêm 没有 vào cuối câu. Ví dụ:\nChủ ngữ\nVị ngữ\nĐộng từ\n着\nTân ngữ\n没有\n门\n开\n着\n没有?\n他们\n穿\n着\n红色的衣服\n没有?\n她 (手里)\n拿\n着\n铅笔\n没有?",
            "ex_cn": "Động từ kết hợp với trợ từ động thái 着 có thể chỉ sự kéo dài của trạng thái nào đó. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "2. Câu hỏi có cấu trúc: 不是······吗?",
            "usage": "“不是······吗” thường được dùng để nhắc ai nhớ đến điều gì hoặc bày tỏ sự khó hiểu/thái độ không hài lòng. Ví dụ:\n( 1 ) 不是说今天有雨吗？怎么没下？\n( 2 ) 你不是北京人吗？怎么不会说北京话?\n( 3 ) (她是你的女朋友?)　她不是有男朋友了吗？",
            "ex_cn": "“不是······吗” thường được dùng để nhắc ai nhớ đến điều gì hoặc bày tỏ sự khó hiểu/thái độ không hài lòng. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "3. Giới từ 往",
            "usage": "Giới từ 往 thường được dùng để chỉ phương hướng. Ví dụ:\n( 1 ) 从这儿往前走，就是我们学校。\n( 2 ) 你看，往左走是医院，往右走是银行。\n( 3 ) 从这儿一直往前走，到了前面的路口再往右走。\nNgữ pháp HSK 2 Phần 14",
            "ex_cn": "Giới từ 往 thường được dùng để chỉ phương hướng. Ví dụ:",
            "ex_py": "Ngữ pháp HSK 2 Phần 14",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "1. Trợ từ động thái 过",
            "usage": "“Động từ + trợ từ động thái 过” được dùng để chỉ một trải nghiệm từng có hoặc hành động từng xảy ra trong quá khứ nhưng không kéo dài đến hiện tại. Ví dụ:\nChủ ngữ\nVị ngữ\nĐộng từ\n过\nTân ngữ\n他们\n来\n过\n我家。\n我\n看\n过\n那个电影。\n我\n去\n过\n中国。\nĐể có dạng phủ định, ta thêm 没(有) vào trước động từ. Ví dụ:\nChủ ngữ\nVị ngữ\n没(有) + Động từ\n过\nTân ngữ\n他们\n没(有) 来\n过\n我家。\n我\n没(有) 看\n过\n那个电影。\n我\n没(有) 去\n过\n中国。\nĐể chuyển câu sang thể nghi vấn, ta thêm 没有 vào cuối câu. Ví dụ:\nChủ ngữ\nVị ngữ\nĐộng từ\n过\nTân ngữ + 没有\n他们\n来\n过\n你家没有？\n你\n看\n过\n那个电影没有？\n你\n去\n过\n中国没有？",
            "ex_cn": "“Động từ + trợ từ động thái 过” được dùng để chỉ một trải nghiệm từng có hoặc hành động từng xảy ra trong quá khứ nhưng không kéo dài đến hiện tại. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "2. Cấu trúc 虽然······, 但是······",
            "usage": "Cấu trúc 虽然······, 但是······ được dùng để nối hai mệnh đề nhằm thể hiện quan hệ đối lập. Ví dụ:\n( 1 ) 虽然外面很冷，但是房间里很热。\n( 2 ) 虽然汉字很难，但是我很喜欢写汉字。\n( 3 ) 虽然是晴天，但是很冷。",
            "ex_cn": "Cấu trúc 虽然······, 但是······ được dùng để nối hai mệnh đề nhằm thể hiện quan hệ đối lập. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "3. Bổ ngữ chỉ tần suất 次",
            "usage": "Bổ ngữ chỉ tần suất 次 thường được dùng sau động từ để chỉ số lần xảy ra hay thực hiện hành động nào đó. Ví dụ:\nChủ ngữ\nVị ngữ\nĐộng từ\n过\nTừ chỉ số đếm + 次\nTân ngữ\n我们\n看\n过\n三次\n电影。\n他们\n做\n过\n一次\n飞机。\n我\n(在这个商店) 买\n过\n一次\n东西。\nKhi tân ngữ là danh từ chỉ nơi chốn, ta có thể đặt bổ ngữ chỉ tần suất ở trước hoặc sau tân ngữ. Ví dụ:\nChủ ngữ\nVị ngữ\nĐộng từ\n过\nTừ chỉ số đếm + 次\nTân ngữ\n我们\n去\n过\n三次\n北京。\n他们\n来\n过\n一次\n中国。\n我\n（上星期）去\n过\n一次\n医院。\nChủ ngữ\nVị ngữ\nĐộng từ\n过\nTân ngữ\nTừ chỉ số đếm + 次\n我们\n去\n过\n北京\n三次。\n他们\n来\n过\n中国\n一次。\n我\n（上星期）去\n过\n医院\n一次。\nKhi tân ngữ là đại từ nhân xưng, ta phải đặt bổ ngữ chỉ tần suất sau tân ngữ. Ví dụ:\nChủ ngữ\nVị ngữ\nĐộng từ\n过\nTân ngữ\nTừ chỉ số đếm + 次\n我们\n找\n过\n他\n三次。\n他们\n看\n过\n我\n一次。\n老师\n叫\n过\n我\n两次。\nNgữ pháp HSK 2 Phần 15",
            "ex_cn": "Bổ ngữ chỉ tần suất 次 thường được dùng sau động từ để chỉ số lần xảy ra hay thực hiện hành động nào đó. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "1. Cấu trúc diễn tả trạng thái của hành động 要······了",
            "usage": "Cấu trúc 快要/快/就要/要······了 được dùng để chỉ sự việc sắp xảy ra. Ví dụ:\nChủ ngữ\nVị ngữ\n快要/快/就要/要\nĐộng từ + Tân ngữ\n了\n火车\n快要\n来\n了。\n要\n下雨\n了。\n新的一年\n快要\n到\n了。\nNếu câu có trạng ngữ chỉ thời gian thì ta chỉ dùng 就要······了. Ví dụ:\nTrạng ngữ chỉ thời gian\nChủ ngữ\nVị ngữ\n就要\nĐộng từ (+ tân ngữ)\n了\n下个月\n我们\n就要\n回国\n了。\n明天\n姐姐\n就要\n走\n了。\n下个星期\n我们\n就要\n考试\n了。",
            "ex_cn": "Cấu trúc 快要/快/就要/要······了 được dùng để chỉ sự việc sắp xảy ra. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        },
        {
            "structure": "2. Cấu trúc 都······了",
            "usage": "都······了 có nghĩa là đã, thường được dùng để nhấn mạnh hoặc diễn tả thái độ không hài lòng. Ví dụ:\n( 1 ) 都8 点了, 快点儿起床吧。\n( 2 ) 你都十岁了，可以自己洗衣服了。\n( 3 ) 都等她半个小时了。",
            "ex_cn": "都······了 có nghĩa là đã, thường được dùng để nhấn mạnh hoặc diễn tả thái độ không hài lòng. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-2.docx",
            "page": ""
        }
    ],
    "hsk3": [
        {
            "structure": "Bổ ngữ kết quả và định ngữ 的",
            "usage": "Động từ:\n完，懂，\n见，开，上，到，成。\nTính từ:\n好，\n对，错，早，晚。\nBiểu thị thông qua động tác làm cho sự vật đến đượcmột địa điểm nào đó hoặc mộttrình độ nào đó, tân ngữ là từ chỉ địa điểm.\nVí dụ: 星期六早上我睡到九点才起床。\nXīngqíliù z ǎ oshang w ǒ shuì dào ji ǔ di ǎ n cái q ǐ chuáng.\nSáng thứ 7 tôi ngủ dậy lúc 9 giờ.\n– Khi cụm chủ vị làm định ngữ thì phải thêm 的\nVí dụ:\n我\n们现在学的词大概有一千多个。\nW ǒ men xiànzài xué de cí dàgài y ǒ u yīqiān duō gè.\nChúng tôi hiện đang học hơn một ngàn từ.",
            "ex_cn": "完，懂，",
            "ex_py": "Tính từ:",
            "ex_vi": "",
            "source": "Ngữ pháp HSK 3.pdf",
            "page": ""
        },
        {
            "structure": "Lượng từ thời gian",
            "usage": "● Khi biểu thị thời gian, động tác xảy ra liên tục,tiếng Trung sử dụng bổ ngữlượng từ:\n一会儿，一分\n钟，一刻钟，半个小时，一个小时，半天，一天，一个星期，半个月，一个月，半年，一年 …\nMuốn hỏi phải nói:\n多\n长时间（了）？\nDuō cháng shíjiān (le)?/Nó dài bao nhiêu?\n● Khi động từ không mang tân ngữ thì bổ ngữ thời lượngđặt sau động từ:Chủ ngữ + V + bổ ngữ thời lượng\nVí dụ 1:\n他在\n语言文化大学学了一年。\nTā zài y\nǔ\nyán wénhuà dàxué xuéleyī nián. / Anhấy học tại Đại học Ngôn ngữ và Văn hóa trong một năm.\nVí dụ 2:\n我每天都\n坚持锻炼一个小时。\nW\nǒ\nměitiān dū jiānchí duànliànyīgè xi ǎ oshí. /Tôi tiếp tục tập thể dục một giờ mỗi ngày.\n● Khi động từ mang tân ngữ ( hoặc động từ là từ ly hợp)thì phải nhắc lạiđộng từ, còn bổ ngữ thời lượng đặt sau động từ nhắclại.",
            "ex_cn": "一会儿，一分",
            "ex_py": "Muốn hỏi phải nói:",
            "ex_vi": "",
            "source": "Ngữ pháp HSK 3.pdf",
            "page": ""
        },
        {
            "structure": "Cấu trúc: Chủ ngữ+ V + O + V+ （ 了） + bổ ngữ thời lượng.",
            "usage": "Ví dụ 1: 他游泳游了一个下午。 Tā yóuy ǒ ng yóule yīgè xiàw ǔ ./Anh ấy bơi một buổichiều.\nVí dụ 2:\n他学\n汉语学了两个多月了。\nTā xué hàny\nǔ\nxuéle li\nǎ\nng gèduō yuèle./ Anh ấyhọc tiếng Trung hơn hai tháng.\nVí dụ 3:\n他写\n汉字写了半个小时。\nTā xiě hànzì xiěle bàn gè xi\nǎ\noshí./Anh ấy viết chữTrung Quốc trong nửa giờ.\n● Khi tân ngữ là đại từ chỉ người thì bổ ngữ thời lượngcó thể đặt giữa độngtừ và tân ngữ. Giữa bổ ngữ thời lượng và tân ngữ cóthể thêm 的\nVí dụ:\nA:\n你看了多\n长时间（的）电视？\nN\nǐ\nkànle duō cháng shíjiān (de) diànshì?/Bạn xem tivibao lâu rồi?\nB:\n我看了三个小\n时（的）电视。\nW\nǒ\nkànle sān gè xi\nǎ\noshí (de) diànshì./Tôi đã xem TVtrong ba giờ.\n● Nếu sau động từ có 了 , và cuối câu có cả trợ từ ngữkhí 了 , là biểu thị độngtác vẫn đang tiến hành.\nVí dụ:\nA\n她学了一年\n汉语。\n（现在可能已不学汉语了）\nTā xuéle yī nián hàny\nǔ\n. (Xiànzàikěnéng y ǐ bù xué hàny ǔ le) Cô ấy học tiếng Trung trongmột năm. (Bây giờ có thểkhông học tiếng Trung nữa)\nB\n她学了一年\n汉语了。（就是现在还学）\nTā xuéle yī nián hàny\nǔ\nle.(Jiùshìxiànzài háixué)/ Cô đã học tiếng Trung Quốc được một năm. (Tứclà vẫn đang học)\n● Sử dụng con số ước lượng thì dùng:一二，二三，三四，四五 …. 多，几。\nVí dụ 1:\n我每天晚上学\n习两三个小时。\nW\nǒ\nměitiān w\nǎ\nnshàng xuéxí li\nǎ\nngsān gèxi ǎ oshí 。 / Tôi học hai hoặc ba giờ mỗi đêm.\nVí dụ 2:\n这件毛衣二百多块。\nZhè jiàn máoyī èrb\nǎ\ni duō kuài\n。\n/ Chiếc áo len này có hơn200 chiếc.\nVí dụ 3: 昨天去了十几个人。 Zuótiān qùle shí j ǐ gèrén 。 / Hômqua có mười mấy ngườiđi.\n● Động từ ly hợp\nĐộng từ ly hợp là chỉ một số động từ song âm tiếtcó kết cấu động tân. Nó vừa cóđặc điểm của từ lại vừa có hình thức phân ly.\nVí dụ:\n睡\n觉，考试，唱歌，跳舞，毕业，游泳，见面。\nĐa số các động từ ly hợp không thể mang tân ngữ.\nVí dụ 1:\n应该说：我去河内跟朋友见面。\nYīnggāi shuō: W\nǒ\nqù hénèigēn péngy ǒ ujiànmiàn/ Cần phải nói rằng: Tôi đã đến Hà Nội đểgặp gỡ bạn bè của tôi.\nVí dụ 2:\n不能\n说：我去河内见面朋友。\nBùnéng shuō: W\nǒ...",
            "ex_cn": "Ví dụ 1: 他游泳游了一个下午。 Tā yóuy ǒ ng yóule yīgè xiàw ǔ ./Anh ấy bơi một buổichiều.",
            "ex_py": "Ví dụ 2:",
            "ex_vi": "Tā xué hàny",
            "source": "Ngữ pháp HSK 3.pdf",
            "page": ""
        },
        {
            "structure": "Cấu trúc câu: A 比 B + động từ + tân ngữ.",
            "usage": "Ví dụ:\n她比我喜\n欢学习。\nTā b\nǐ\nw\nǒ\nx\nǐ\nhuān xuéxí./ Cô ấy thíchhọc nhiều hơn tôi.\n● Nếu động từ mang bổ ngữ trạng thái 比 cũng có thể đặttrước động từ hoặcđặt trước bổ ngữ.\nVí dụ 1: 他比我考得好。 / 他考得比我好 Tā b ǐ w ǒ k ǎ o dé h ǎ o./ Tāk ǎ o dé b ǐ w ǒ h ǎ o/Anh ấy tốt hơn tôi.\nVí dụ 2: 我今天比你来得早。 / 我今天来得比你早。 W ǒ jīntiān b ǐ n ǐ láidéz ǎ o./W ǒ jīntiānláidé b ǐ n ǐ z ǎ o./\nTôi đến sớm hơn bạn hôm nay. / Tôi đến sớm hơn bạnhôm nay.\n● Khi muốn biểu đạt sự khác biệt giữa các sự vật, thườngsử dụng 一点儿，一些 để biểu đạt sự khác biệt không lớn, còn chúng tadùng 多，得多， để biểuđạt sự khác biệt lớn.\nVí dụ 1: 上海冬天是不是比北京暖和一点儿？ Shàngh ǎ i dōngtiān shì bùshìb ǐ běijīngnu ǎ nhuo yīdi ǎ n er? Mùa đông ở Thượng Hải có ấm hơnBắc Kinh không?\nVí dụ 2:\n这件比那件贵多了。\nZhè jiàn b\nǐ\nnà jiàn guì duōle./Cái này đắt hơn cái kianhiều.\nVí dụ 3: 他跑得比我快得多。 Tā p ǎ o dé b ǐ w ǒ kuài dé duō./ Anhấy chạy nhanh hơn tôinhiều.\n● A 不比 B （ A xấp xỉ B) ， thường dùng diễn tả sự không đồngý.\nVí dụ 1:\nA: 冬天上海比北京暖和。 Dōngtiān shàngh ǎ i b ǐ běijīng nu ǎ nhuo./Mùa đông ThượngHải ấm hơn Bắc Kinh\nB: 不，冬天上海不比北京暖和。 Bù, dōngtiān shàngh ǎ i bùb ǐ běijīngnu ǎ nhuo./ Không,Thượng Hải không ấm hơn Bắc Kinh vào mùa đông.\nVí dụ 2:\nA: 她比你大吧？ Tā b ǐ n ǐ dà ba?/ Là cô ấy lớn hơn bạn?\nB: 她不比我大。 Tā bùb ǐ w ǒ dà./ Cô ấy không lớn hơn tôi.\n● Cách dùng 有，没（有）\n有 là đạt được, có đươc..\n没（有） là dạng phủ định.",
            "ex_cn": "她比我喜",
            "ex_py": "Tā b",
            "ex_vi": "ǐ",
            "source": "Ngữ pháp HSK 3.pdf",
            "page": ""
        },
        {
            "structure": "Cấu trúc câu:",
            "usage": "Khẳng định: A\n有\nB+(\n这么，那么）\n…\nPhủ định: A\n没（\n有）\nB+\n（\n这么，那么）\n….\nVí dụ 1:\nA:\n他有你高\n吗？\nTā y\nǒ\nu n\nǐ\ngāo ma?/ Anh ấy có bạn cao không?\nB:\n他没有我\n这么高。\nTā méiy\nǒ\nu w\nǒ\nzhème gāo./ Anh ấy khôngcao bằng tôi.\nVí dụ 2:\nA:\n你\n这次考得怎么样？\nN\nǐ\nzhè cì k\nǎ\no dé zěnme yàng?/ Lần kiểmtra của bạn thế nào?\nB: 我没有你考得那么好。 W ǒ méiy ǒ u n ǐ k ǎ o dé nàme h ǎ o./ Tôi khôngcó bạn tốt nhưbạn đã làm.\nVí dụ 3:\n我\n们那儿冬天没有这么冷。\nW\nǒ\nmen nà’er dōngtiān méiy\nǒ\nuzhème lěng./Chúng tôi không quá lạnh vào mùa đông.\n● Ý nghĩa của A 不如 B, A không bằng, không như B.\nVí dụ 1:\n这个饭馆不如那个。\nZhège fàngu\nǎ\nn bùrú nàgè./ Nhà hàngnày không tốt nhưthế.\nVí dụ 2: 我不如她学得好。 W ǒ bùrú tā xué dé h ǎ o./ Tôi khôngtốt như cô ấy.\n● Cách dùng bổ ngữ số lượng: Dùng để so sánh sự việcnày với việc kia,người này với người khác…",
            "ex_cn": "有",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ pháp HSK 3.pdf",
            "page": ""
        },
        {
            "structure": "Cấu trúc câu: Hình dung từ + số lượng từ( bổ ngữ)",
            "usage": "Ví dụ:\nA\n罗兰比我高\n公分。\nLuólán b\nǐ\nw\nǒ\ngāo 5 gōngfēn./ Roland caohơn tôi 5 cm.\n● Câu cảm thán 太，真， dùng để tăng mức độ điều muốn nói.\nVí dụ:\n太好了！ Tài h ǎ ole! Tuyệt vời\n真好！ Zhēn h ǎ o! Thật tuyệt!\n● Khi sử dụng, 好，多 + động từ hoặc hình dung từ + danhtừ( cụm từ) cuốicâu thường thêm 啊，呢。\nVí dụ 1: 你写得多好啊！ N ǐ xiě dé duō h ǎ o a!/ Bạn viết rấtlà đẹp.\nVí dụ 2:\n这个公园好漂亮啊！\nZhège gōngyuán h\nǎ\no piàoliang a!/Công viên này đẹpquá!\nVí dụ 3:\n你听，\n这个歌词写得多好呢！\nN\nǐ\ntīng, zhège gēcí xiě déduō h ǎ o ne! / Bạnnghe xem, lời bài hát này thật hay quá!",
            "ex_cn": "罗兰比我高",
            "ex_py": "Luólán b",
            "ex_vi": "ǐ",
            "source": "Ngữ pháp HSK 3.pdf",
            "page": ""
        },
        {
            "structure": "Cấu trúc câu so sánh trong ngữ pháp HSK 3",
            "usage": "●\nGiống nhau: A\n跟\nB\n一\n样。\nVí dụ:\n这件毛衣跟那件价钱一样。\n/\nZhè jiàn máoyī gēn nà jiàn jiàqián yīyàng./Chiếc áo len\nnày có cùng giá với cái đó. Khác nhau: A\n跟\nB\n不一\n样。\nVí dụ:\n这件衣服跟那件衣服价钱不一样。\n/\nZhè jiàn yīfú gēn nà jiàn yīfú jiàqiánbù yīyàng./Chiếc váy này không cùng giá với chiếc váy.\n–\n跟\n……\n一\n样\n/\n不一样\ncòn có thể làm định ngữ.\nVí dụ:\n我\n买了一本跟你这本一样的词典。\n/\nW\nǒ\nm\nǎ\nile yī běn gēn n\nǐ\nzhè běn yīyàng decídi ǎ n./Tôi đã mua một từ điển tương tự như của bạn.\n● Câu liên kết\n不但 ……. 而且 ….. Bùdàn……. Érqiě….. Không chỉ …. và ….\nDùng để liên kết câu phức, biểu đạt ý nghĩa tăng dần.Khi hai phân câu đều thuộcmột chủ ngữ, 不但 phải đặt trước chủ ngữ của phân câuthứ nhất.\nVí dụ:\n他不但会\n说英语，而且还会法语。\nTā bùdàn huì shuō yīngy\nǔ\n, érqiě háihuì f ǎ y ǔ ./ Anhấy không chỉ nói tiếng Anh mà còn nói tiếng Pháp.",
            "ex_cn": "跟",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ pháp HSK 3.pdf",
            "page": ""
        },
        {
            "structure": "1.不但 ( bú dàn)…… 而且 ( ér qiě)……",
            "usage": "Có nghĩa là : Không những….. mà còn………, thườngdùng liền với nhau để biểu thị mứcđộ tăng tiến. Sau đây chúng ta học câu thứ nhất.\nVí dụ:\n我不但去\n过下龙湾，而且去过胡志明市。\n/\nW\nǒ\nbú dàn qù\nɡ\nuò xià lón\nɡ\nwān， ér qiě qùɡ uò hú zhì mín ɡ shì./ Tôi không những đi qua VịnhHạ Long, mà còn đi qua thànhphố Hồ Chí Minh.",
            "ex_cn": "我不但去",
            "ex_py": "ǒ",
            "ex_vi": "",
            "source": "Ngữ pháp HSK 3.pdf",
            "page": ""
        },
        {
            "structure": "1. Biểu đạt sự thay đổi bằng trợ từ ngữ khí 了 và 不 …. 了。",
            "usage": "– Trợ từ ngữ khí 了 đặt ở cuối câu biểu thị sự thayđổi:\nVí dụ 1:\n这件衣服小了。\n/\nZhè jiàn yīfú xi\nǎ\nole/ Cái váy nàynhỏ.\nVí dụ 2:\n我今天不\n发烧了。\n/\nW\nǒ\njīntiān bù fāshāole/ Hôm naytôi không bị sốt.\n– Dùng 要 …… 了 để biểu đạt động tác sắp xảy ra:\nVí dụ:\n火\n车八点开，现在七点半。（火车快要开了\n/\n火车要开了\n/\n火车就要开了）\nHu\nǒ\nchē bādi ǎ n kāi, xiànzài qī di ǎ n bàn.(Hu ǒ chē kuàiyào kāile/hu ǒ chē yào kāile/ hu ǒ chē jiù yàokāile) / Tàu mở cửa lúc tám giờ, bây giờ là bảy giờrưỡi. (Tàu sắp mở )\nChú ý: Nếu trong câu đã đã biểu thị thời gian cụ thể thì không dùng 快要 mà phảidùng 就要 .\nVí dụ:\n不能\n说：下个月姐姐快要结婚了。\n/\nBùnéng shuō: Xià gè yuè jiějiě kuàiyàojiéhūnle./Không thể nói: Chị tôi sẽ kết hôn vào tháng tới.\n应该说：下个月姐姐就要结婚了。\n/\nYīnggāi shuō: Xià gè yuè jiějiě jiùyào jiéhūnle./ Cầnphải nói rằng: em gái tôi sẽ kết hôn vào tháng tới.\n– Trạng từ kết cấu 地 ( de) để nhận biết trạng ngữ trongcâu:\nVí dụ:\nA\n她高\n兴地告诉我，姐姐下个月就要结婚了。\n/\nTā gāoxìng de gàosù w\nǒ\n, jiějiěxià gèyuè jiù yào jiéhūnle./ Cô ấy rất vui khi nói với tôirằng em gái tôi sẽ kết hôn vào thángtới.\nB.\n同学\n们都在努力地学习。\n/\nTóngxuémen dōu zài n\nǔ\nlì dì xuéxí./Các sinh viên đangchăm chỉ học.\n– Ngoài ra, hán ngữ còn có một số câu đơn giản khôngcó chủ ngữ để biểu thị trạngthái thời tiết:\nVí dụ:\n刮\n风了，下雨了，没下雪\n…\nBiểu đạt xu hướng của động tác trongNgữ pháp giáotrìnhhán ngữ quyển 3:\n● Bổ ngữ xu hướng đơn:\nCác động từ 来 và 去 Đặt sau một số động từ làm bổ ngữbiểu thị xu hướng của độngtác, loại bổ ngữ này gọi là bổ ngữ xu hướng đơn. Khiphương hướng của động táchướng đến người nói hoặc sự vật được đề cập đến thìdùng 来 , nếu phương hướngcủa động tác ngược lại hướng của người nói hoặc sựvật được đề cập đến, thì dùng去（ tất cả các hướng tập chung vào mình thì dùng 来， cáchướng từ mình đi ra dùng去）\nVí dụ 1:\n上来吧\n（\n说话人在上边）\n/\nShànglái ba (shuōhuà rén zàishàngbian)/ Đi lên(người nói ở trên)\nVí dụ 2:...",
            "ex_cn": "– Trợ từ ngữ khí 了 đặt ở cuối câu biểu thị sự thayđổi:",
            "ex_py": "Ví dụ 1:",
            "ex_vi": "/",
            "source": "Ngữ pháp HSK 3.pdf",
            "page": ""
        },
        {
            "structure": "Bổ ngữ động lượng nói rõ số lần phát sinh hoặc tiến hành động tác. Bổ ngữ động",
            "usage": "lượng do số từ và những lượng từ như:\n次，声，下\n….\ntạo thành. Trợ từ động thái\n了，\n过phải đặt sau động từ và trước bổ ngữ động lượng.\nVí dụ:\n他去\n过两次长城。\n/\nTā qùguò li\nǎ\nng cì chángchéng./ Anhấy đã đến Vạn LýTrường Thành hai lần.\nKhi tân ngữ là danh từ chỉ sự vật, thông thường đặtsau bổ ngữ động lượng, khi là đạitừ nhân xưng thì đặt trước bổ ngữ. Khi Tân ngữ làdanh từ chỉ người,chỉ địa điểm thìcó thể đặt trước hoặc sau bổ ngữ.\nVí dụ:\n他找\n过你一次。\n/\nTā zh\nǎ\noguò n\nǐ\nyīcì./ Anh ấy đã tìmkiếm bạn một lần\nSo sánh 次 và 遍： Đều biểu đạt lượng phát sinh của độngtác, nhưng 遍 nhấn mạnhcả quá trình động tác từ khi bắt đầu đến khi kết thúc.\nVí dụ:\n这本书很好，我已经看过两遍了。\n/\nZhè běn shū hěn h\nǎ\no, w\nǒ\ny\nǐ\njīngkànguò li ǎ ngbiànle./ Cuốn sách này rất hay, tôi đã xem nó hailần.\n●\nSo sánh giữa\n过\nvà\n了",
            "ex_cn": "次，声，下",
            "ex_py": "tạo thành. Trợ từ động thái",
            "ex_vi": "",
            "source": "Ngữ pháp HSK 3.pdf",
            "page": ""
        },
        {
            "structure": "Cấu trúc câu: 没（有） + V （ 不能有 “ 了 “ ）",
            "usage": "Ví dụ:\n昨天晚上的\n这个电影我没看，不知道什么意思。\n/\nZuótiān w\nǎ\nnshàng dezhègediàny ǐ ng w ǒ méi kàn, bù zhīdào shénme yìsi./ Tôi đãkhông đọc bộ phim này tối qua,tôi không biết ý nghĩa của nó.\nÝ nghĩa trong câu có sự khác nhau giữa\n过\nvà\n了\nA\n我看了\n这个电影，还不錯。\nĐánh giá theo công việc đã hoàn thành.\nB\n我看\n过这个电影\n,\n还不错\n.\nĐánh giá theo kinh nghiệm từng trải.\n● Biểu đạt số thứ tự: Hán ngữ thêm 第 vào trước số từđể biểu đạt:\nVí dụ:\n第一次，第五天，第一个星期，第四十一\n课\n…\nCó những trường hợp tự bản thân số từ cũng dùng đểbiểu thị số thứ tự, không cầnthêm 第 .\nVí dụ:\n一月，三楼，四\n门。",
            "ex_cn": "昨天晚上的",
            "ex_py": "Zuótiān w",
            "ex_vi": "ǎ",
            "source": "Ngữ pháp HSK 3.pdf",
            "page": ""
        },
        {
            "structure": "Cấu trúc 是 …. 的",
            "usage": "Dùng để nhấn mạnh thời gian, địa điểm, phương thức,mục đích, đối tượng … củađộng tác đã xảy ra hoặc đã hoàn thành. Trong câu khẳngđịnh 是 có thể được bỏ.Trong câu phủ định 是 không thể lược bỏ.\nHình thức khẳng định.\nVí dụ 1: 我（是）去年九月来中国的。 W ǒ (shì) qùnián ji ǔ yuè láizhōngguó de./Tôi (có)đã đến Trung Quốc vào tháng 9 năm ngoái./\nVí dụ 2: 她（是）从美国来的。 Tā (shì) cóng měiguó lái de./Cô ấy (có) đến từ Hoa Kỳ.\nVí dụ 3:\n我\n们（是）坐飞机来的。\nW\nǒ\nmen (shì) zuò fēijī lái de./Chúng tôi (có) đến bằngmáy bay.\nHình thức phủ định.\nVí dụ 4: 我不是来旅行的，我是来留学的。 / W ǒ bùshì lái l ǚ xíng de, w ǒshì lái liúxué de./Tôi không ở đây để đi du lịch, tôi đang đi du học.\nVí dụ 5: 她不是一个人来的是跟朋友一起来的。 / Tā bùshì yīgè rén láide shì gēnpéngy ǒ u yī q ǐ lái de./ Cô không cô đơn, đi cùng bạnbè.\nVí dụ 6:\n他\n们不是坐飞机来的，是坐火车来的。\n/\nTāmen bùshì zuò fēijī láide, shì zuòhu ǒ chē lái de./ Họ không đến bằng máy bay, họ đếnbằng tàu hỏa.\n– Khi động từ mang tân ngữ là danh từ, tân ngữ thườngđặt sau 的\nVí dụ 1:\nA\n：\n你是在哪儿学的\n汉语？\n/\nN\nǐ\nshì zài n\nǎ\n’er xué de hàny\nǔ\n?/ Bạnđã học tiếng Trung ởđâu?\nB\n：\n在北京学的（\n汉语）。\n/\nZài běijīng xué de (hàny\nǔ\n)./ Học ở BắcKinh (tiếng Trung).",
            "ex_cn": "Dùng để nhấn mạnh thời gian, địa điểm, phương thức,mục đích, đối tượng … củađộng tác đã xảy ra hoặc đã hoàn thành. Trong câu khẳngđịnh 是 có thể được bỏ.Trong câu phủ định 是 không thể lược bỏ.",
            "ex_py": "Hình thức khẳng định.",
            "ex_vi": "Ví dụ 3:",
            "source": "Ngữ pháp HSK 3.pdf",
            "page": ""
        },
        {
            "structure": "Cấu trúc liên kết: 一 ……. 就 …..",
            "usage": "Dùng để biểu thị các động tác thứ hai xảy ra tiếpliền động tác thứ nhất.\nVí dụ:\n今天我一下\n课就回宿舍。\n/\n今天我一下课就回宿舍。\n/\nHôm nay, tôi trở lạiký túc xásau giờ học.\n– Động từ thứ nhất là điều kiện và nguyên nhân, độngtừ thứ hai là kết quả.\nVí dụ:\n她一喝酒就\n脸红。\n/\nTā yī hēji\nǔ\njiù li\nǎ\nnhóng./ Cô ấy đỏmặt ngay khi uống.\n– Trong tiếng hán có một số hình dung từ có thể dùngkiểu lập lại theo cấu trúc AAtrong khẩu ngữ âm tiết thứ hai có thể uốn lưỡi.\nVí dụ:\n好好儿，慢慢儿，早早儿，\n远远儿，\n● Hình thức lập lại của hình dung từ song âm tiết là:AABB. Sau khi lập lại, âmtiết thứ hai có thể đọc thanh nhẹ.\nVí dụ:\n：\n高高\n兴兴，漂漂亮亮，马马虎虎\nKhi làm trạng ngữ, nói chung phải dùng 地。\nVí dụ:\n）\n我高高的鼻子，黄黄的\n头发，中国人一看就知道我是老外\n/\nW\nǒ\ngāo gāo de bízi,huáng huáng de tóuf ǎ , zhōngguó rén yī kàn jiù zhīdàow ǒ shì l ǎ owài/ Mũi cao, tócvàng, người Trung Quốc biết tôi là người nước ngoài.",
            "ex_cn": "今天我一下",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ pháp HSK 3.pdf",
            "page": ""
        },
        {
            "structure": "Câu vị ngữ chủ vị",
            "usage": "Nếu câu dùng một cụm chủ vị để miêu tả, nói rõ mộtđối tượng nào đó( chủ ngữ củacâu) thì cũng là loại câu vị ngữ chủ vị.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ pháp HSK 3.pdf",
            "page": ""
        },
        {
            "structure": "Cấu trúc câu: Danh từ 1 + danh từ 2 + động từ",
            "usage": "Danh từ 1 thường là tân ngữ của động từ.\nVí dụ:\n她\n讲的我没有都听懂。\n/\nTā ji\nǎ\nng de w\nǒ\nméiy\nǒ\nu dōu tīngd ǒ ng./ Tôi không hiểumọi thứ cô ấy nói.",
            "ex_cn": "她",
            "ex_py": "Tā ji",
            "ex_vi": "ǎ",
            "source": "Ngữ pháp HSK 3.pdf",
            "page": ""
        },
        {
            "structure": "Bổ ngữ kết quả: 在，好，着（ zháo)",
            "usage": "Cấu trúc: Động từ + 在 ， biểu thị thông qua hành động làm cho người hoặc sự vậtnào đó ở một nơi nào đó. Tân ngữ là từ chỉ địa điểm.\nVí dụ: 我去晚了，坐在最后一排了 / W ǒ qù w ǎ nle, zuò zài zuìhòu yīpáile/ Tôi đến trễ,ngồi ở hàng cuối cùng.\n– Động từ + 着： Biểu thị đã đạt được mục đích của hànhđộng.\nVí dụ:\n你要的那本\n书我给你买着了。\n/\nN\nǐ\nyào dì nà běn shū w\nǒ\ngěi n\nǐm ǎ izhele/Tôi đãmua cho bạn cuốn sách bạn muốn.\nĐộng từ + 好： Biểu thị động tác hoàn thành và đã đạtđến mức độ hoàn thiện, làmcho người ta cảm thấy hài lòng.\nVí dụ:\nA\n：\n老\n师布置的论文你写好了没有？\nL\nǎ\noshī bùzhì dì lùnwén n\nǐ\nxiě h\nǎ\noleméiy ǒ u?/Bạnđã viết các giấy tờ mà giáo viên đã sắp xếp?\nB： 早写好了 / Z ǎ o xiě h ǎ ole/ Viết từ sớm rồi.\nĐộng từ + 成 ： biểu thị một sự vật nào đó cho động tácmà dẫn đến sự thay đổi hoặcđã thực hiện được mục đích của động tác.\nVí dụ:\n这本英文小说他已经翻译成中文了。\n/\nZhè běn yīngwén xi\nǎ\noshuō tāy ǐ jīng fānyìchéng zhōngwénle./ Cuốn tiểu thuyết tiếng Anh nàyđã được dịch sang tiếng TrungQuốc.\nTrong tiếng hán, chủ ngữ của câu có là đối tượng phátsinh ra động tác,hoặc cũng cóthể là đối tượng chịu tác động của động tác. Loạithứ nhất gọi là câu chủ động, loạithứ hai gọi là câu bị động. Khi nhấn mạnh hoặc nóirõ đối tượng của động tác nhưthế nào thì dùng câu bị động:",
            "ex_cn": "Cấu trúc: Động từ + 在 ， biểu thị thông qua hành động làm cho người hoặc sự vậtnào đó ở một nơi nào đó. Tân ngữ là từ chỉ địa điểm.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ pháp HSK 3.pdf",
            "page": ""
        },
        {
            "structure": "Cấu trúc câu bị động",
            "usage": "Chủ ngữ bị động + đồng từ + thành phần khác.\nVí dụ: 照片洗好了。 Zhàopiàn x ǐ h ǎ ole./Bức ảnh được rửasạch.\n– Trong tiếng hán, danh lượng từ và động lượng từđều có thể dùng kiểu lập lại, biểuthị ý nghĩa ( mỗi )\nVí dụ:\n这些照片张张照得都很好。\n/\nZhèxiē zhàopiàn zhāng zhāng zhào dé dōu hěnh ǎ o./ Mỗi bức ảnh này đều rất tốt.\n– Để biểu đạt sự tăng dần trong mức độ biến hóa củasự vật theo sự chuyển dịchcủa thời gian ta dùng:\n一天比一天 … mỗi ngày một…\n一年比一年 … mỗi năm một ….\nVí dụ: ） 来中国以后，我一天比一天胖。 / Lái zhōngguó y ǐ hòu, w ǒ yītiānb ǐ yītiānpàng./Sau khi đến Trung Quốc, tôi đang mỗi ngày béohơn.\nChủ ngữ của phần lớn câu trong tiếng Hán đều là chủthể phát ra động tác, nhưngcũng có khi về mặt ý nghĩa chủ ngữ lại là kẻ chịusự chi phối của động tác, hành vi.Loại câu đó là câu bị động về ý nghĩa.\nVí dụ:\n–\n入学通知\n书寄来了。\n/\nRùxué tōngzhī shū jì láile./ Giấy báonhập học đã được gửi tớirồi.\n–\n飞机票还没买到。\n/\nFēijī piào hái méi m\nǎ\ni dào./ Vé máy baycòn chưa mua được.\nChủ ngữ trong 2 câu trên là “\n入学通知\n书\n”\nvà “\n飞机票\n”\nvề mặtý nghĩa đều chịu sự chi\nphối của động tác “\n寄\n”\nvà “\n买\n”.\nVậy hai câu trên làcâu bị động về ý nghĩa.\n●",
            "ex_cn": "Ví dụ: 照片洗好了。 Zhàopiàn x ǐ h ǎ ole./Bức ảnh được rửasạch.",
            "ex_py": "– Trong tiếng hán, danh lượng từ và động lượng từđều có thể dùng kiểu lập lại, biểuthị ý nghĩa ( mỗi )",
            "ex_vi": "Ví dụ:",
            "source": "Ngữ pháp HSK 3.pdf",
            "page": ""
        },
        {
            "structure": "Cấu trúc câu bị động trong tiếng Trung dùng “ 被 ” ， “ 叫 ”",
            "usage": "，\n“\n让\n”\nnhư sau:\nChủ ngữ +\n被\n/\n叫\n/\n让\n+\nkẻ chủ động + động từ + thànhphần khác\nChủ ngữ trong loại câu này là kẻ chịu sự chi phốicủa hành vi động tác, còn kẻ chủđộng phát ra động tác lại là tân ngữ của giới từ “ 被 ”\n，\n“\n叫\n”\n，\n“\n让\n”.\nVí dụ 1:\n–\n新画\n报被同学们借走了。\n/\nXīn huàbào bèi tóngxuémen jiè z\nǒ\nule./Họa báo mới bịhọc sinh mượn đi rồi.\nVí dụ 2:\n–\n录音机叫爸爸关上了\n”\n。\n/\nLùyīnjī jiào bàba guānshàngle./Cát-xétbị ba tắt rồi.\nKhi dùng loại câu này, cần chú ý các điểm sau:\nĐộng từ vị ngữ của loại câu này phải là động từ cậpvật, về ý nghĩa có thể chi phốiđược chủ ngữ.\nPhía sau động từ nói chung thường có thành phần khác,như “ 走了 ”, “ 上了 ” trong bacâu ví dụ trên.\n“\n被\n”\n，\n“\n叫\n”\n，\n“\n让\n”\ncùng với kẻ chủ động sau nó tạo thànhngữ giới tân làm trạng ngữ.\n“被 ” thường được dùng nhiều trong vả viết và nói, “ 叫 ”\n，\n“\n让\n”\nthường dùng trong khẩungữ. Tân ngữ sau “ 被 ” có thể có cũng có thể không,\ncòn sau “\n叫\n”\n，\n“\n让\n”\nbắt buộc phảicó tân ngữ, nếu không biết hoặc không thể nói ra thìdùng “ 人 ”.\nVí dụ:\n– 那个工人被救活了。 / Nàgè gōngrén bèi jiù huóle./ Người côngnhân ấy đã được cứusống.\n–\n他的自行\n车叫人偷走了。\n/\nTā de zìxíngchē jiào rén tōu z\nǒ\nule./Xe đạp của anh ấy bịngười ta lấy cắp rồi.\nNếu câu có động từ năng nguyện và phó từ phủ định,chúng sẽ được dùng trước “ 被 ”\n，\n“\n叫\n”\n，\n“\n让\n”.\nVí dụ:\n–\n妹妹的衣服没有\n让雨弄淋。\n/\nMèimei de yīfú méiy\nǒ\nu ràng y\nǔ\nnònglín/ Áo của em gáikhông bị mưa ướt.\n–\n这个玩具现在还不能叫孩子看见。\n/\nZhège wánjù xiànzài hái bùnéng jiàoháizikànjiàn./ Đồ chơi này bây giờ chưa thể cho con nhìnthấy.\n●\nTrợ từ “\n给\n”\n，\n“\n所\n”\nbiểu thị bị động\nĐể biểu thị bị động, người ta còn có thể dùng trợ\ntừ “\n给\n”\nvà “\n所\n”.\nTrợ từ “\n给\n”\ncó thể dùng ngay trước động từ để biểu thị bị động. Nó có thể dùng trongcâu bị động và cả câu chủ động.\nVí dụ:\n–\n教室都\n让我们给打扫干净了。\n/\nJiàoshì dōu ràng w\nǒ\nmen gěi d\nǎ\ns\nǎ...",
            "ex_cn": "让",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ pháp HSK 3.pdf",
            "page": ""
        },
        {
            "structure": "1. Bổ ngữ chỉ kết quả 好",
            "usage": "Bổ ngữ chỉ kết quả 好 được dùng sau động từ để diễn tả hành động được hoàn thành và làm cho người ta cảm thấy hài lòng.\nSo sánh\n我吃完了。Hành động ăn đã hoàn thành\n我吃好了。Hành động ăn đã hoàn thành, và người nói rất hài lòng về bữa ăn\nVí dụ:\n今晚的电影小刚已经买好票了。\n饭还没做好，请你等一会儿。\n去旅游的东西准备好了吗？\n我还没想好要不要跟你去呢。",
            "ex_cn": "Bổ ngữ chỉ kết quả 好 được dùng sau động từ để diễn tả hành động được hoàn thành và làm cho người ta cảm thấy hài lòng.",
            "ex_py": "So sánh",
            "ex_vi": "Ví dụ:",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "2. Cấu trúc diễn tả sự phủ định 一。。。也/都+不/没。。。",
            "usage": "Cấu trúc \"一 + lượng từ + danh từ + 也/都 + 不/没 + động từ\nVí dụ:\n我一个苹果也不想吃。\n昨天他一件衣服都没买。\n小丽一杯茶也没喝。\n手机，电脑，地图，一个也不能少。\n\"一 + lượng từ\" có thể thay thế bằng 一点儿\nVí dụ:\n我一点儿东西也不想吃。\n这个星期我很忙，一点儿时间也没有。\n今天早上我一点儿咖啡都没喝。\n我一点儿钱都没带，所以不能买衣服。\nCấu trúc \"一点儿也/都+不+tính từ\"\nVí dụ:\n他一点儿也不累。\n南方一点儿都不冷。\n那个地方一点儿也不元。\n你怎么一点儿也不着急？",
            "ex_cn": "Cấu trúc \"一 + lượng từ + danh từ + 也/都 + 不/没 + động từ",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "3. Liên từ 那",
            "usage": "那 được dùng ở đầu câu để chỉ kết quả hay nhận xét dựa vào nội dung được đề cập trước đó.\nVí dụ:\nA: 我不想去看电影。\nB: 那我也不去了。\nA: （明天的考试）我早就复习好了。\nB: 那也不能一直玩儿啊。\nNgữ pháp HSK 3 Phần 2",
            "ex_cn": "那 được dùng ở đầu câu để chỉ kết quả hay nhận xét dựa vào nội dung được đề cập trước đó.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "1. Bổ ngữ chỉ phương hướng đơn giản",
            "usage": "Trong tiếng Trung Quốc, \"động từ + 来/去\" được dùng để chỉ phương hướng của hành động, 来 chỉ hướng tiến về phía người nói, 去 chỉ hướng rời xa người nói. Các động từ thường dùng nhất là 上，下，进，出，回，过，起 và một số động từ mà chúng ta đã học như 买，带，搬。\nVí dụ:\n我们在楼上等你呢，你上来吧。（说话的人在楼上）\n谁在外边？你出去看看吧。（“你” 在屋里）\n汉语书你带来了吗？\n那边树多，我们过去做一下吧。\nNếu tân ngữ là danh từ chỉ nơi chốn thì ta phải đặt tân ngữ trước 来/去。\nVí dụ:\n小狗下楼来了。\n老师进教室来了。\n朋友回家去了。\n我上楼去。\nNếu tân ngữ là danh từ chỉ sự vật thì ta có thể đặt tân ngữ trước hoặc sau 来/去。\nVí dụ:\n明天要带作业来。\n帮我买来点儿面包。\n你搬这把椅子去吧。\n这次旅游，我想带去这本书。",
            "ex_cn": "Trong tiếng Trung Quốc, \"động từ + 来/去\" được dùng để chỉ phương hướng của hành động, 来 chỉ hướng tiến về phía người nói, 去 chỉ hướng rời xa người nói. Các động từ thường dùng nhất là 上，下，进，出，回，过，起 và một số động từ mà chúng ta đã học như 买，",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "2. Cấu trúc diễn tả hai hành động xảy ra liên tiếp",
            "usage": "Trong tiếng Trung Quốc, cấu trúc \"động từ 1 + 了。。。就+động từ 2。。。\" được dùng để diễn tả hai hành động xảy ra liên tiếp, hành động thứ hai nối tiếp ngay sau hành động thứ nhất.\nVí dụ:\n我下了课就吃饭。\n妈妈起了床就做早饭。\n小刚拿了伞就下来。\n你每天晚上吃了饭就睡觉。\nNếu câu có hai chủ ngữ thì đặt chủ ngữ thứ hai trước 就。\nVí dụ:\n你下了课我们就去书店。\n老师进了教室我们就对他说 “生日快乐”。\n爸爸回来了我们就吃饭。\n他到了办公室我就告诉他。",
            "ex_cn": "Trong tiếng Trung Quốc, cấu trúc \"động từ 1 + 了。。。就+động từ 2。。。\" được dùng để diễn tả hai hành động xảy ra liên tiếp, hành động thứ hai nối tiếp ngay sau hành động thứ nhất.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "3. Câu hỏi có cấu trúc 能。。。吗？",
            "usage": "能。。。吗 được dùng trong câu hỏi tu từ. Nếu thành phần đứng giữa 能 và 吗 có hình thức khẳng định thì cách diễn đạt này mang nghĩa phủ định, nếu thành phần ấy có hình thức phủ định thì cách diễn đạt này mang nghĩa khẳng định.\nVí dụ:\nA: 为什么我的汉语学得不好？\nB: 你不做作业，也不做练习， 能学好吗？ （不能学好）\nA: 你看我这么胖，怎么办呢？\n你每天晚上吃了晚饭就睡觉，也不出去走走，能不胖吗？ （会胖）\nNgữ pháp HSK 3 Phần 3",
            "ex_cn": "能。。。吗 được dùng trong câu hỏi tu từ. Nếu thành phần đứng giữa 能 và 吗 có hình thức khẳng định thì cách diễn đạt này mang nghĩa phủ định, nếu thành phần ấy có hình thức phủ định thì cách diễn đạt này mang nghĩa khẳng định.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "1. 还是 và 或者",
            "usage": "还是 và 或者 được dùng để diễn tả sự lựa chọn. Thông thường 还是 được dùng trong câu hỏi còn 或者 được dùng trong câu trần thuật. Ví dụ:\n你要喝咖啡还是喝茶？\n明天是晴天还是阴天？\n今天晚上吃米饭或者面条都可以。\n天冷了或者工作累了的时候，喝杯热茶很舒服。\nĐối với những câu có mệnh đề mang hình thức nghi vấn, ta chỉ được dùng 还是 trong mệnh đề đó. Ví dụ:\n周太太 40岁还是50岁，我们不知道。\n小丽还没想好周末去爬山还是去看电影。\n他的生日是10月还是11月，我不记得了。\n我不知道这个人是男的还是女的。",
            "ex_cn": "还是 và 或者 được dùng để diễn tả sự lựa chọn. Thông thường 还是 được dùng trong câu hỏi còn 或者 được dùng trong câu trần thuật. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "2. Cách diễn tả sự tồn tại：từ/cụm từ chỉ vị trí + động từ + 着 + từ chỉ số đếm+ lượng từ + danh từ",
            "usage": "Cấu trúc từ/cụm từ chỉ vị trí + động từ + 着 + cụm danh từ diễn tả ở nơi nào đó có vật gì. Các động từ thường được dùng trong cấu trúc này là 放，写，坐，住。。。Thông thường người ta dùng cụm danh từ chỉ sự vật không xác định như 一本书，几个人 chứ không dùng cụm danh từ chỉ sự vật xác định như 这本书，周经理。\nVí dụ:\n桌子上 放着一杯咖啡。\n我家楼上住着一个老师。\n上面写着320元。\n桌子上放着很多饮料。\nDạng phủ định: từ/cụm từ chỉ vị trí + 没 + động từ + 着 + cụm danh từ\nVí dụ:\n桌子上 没放着咖啡。\n我家楼上没住着老师。\n上面没写着多少钱。\n桌子上没放着饮料。",
            "ex_cn": "Cấu trúc từ/cụm từ chỉ vị trí + động từ + 着 + cụm danh từ diễn tả ở nơi nào đó có vật gì. Các động từ thường được dùng trong cấu trúc này là 放，写，坐，住。。。Thông thường người ta dùng cụm danh từ chỉ sự vật không xác định như 一本书，几个人 chứ không dù",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "3. Trợ động từ 会",
            "usage": "Trợ động từ 会 được dùng trong câu để chỉ khả năng, thường được sử dụng để diễn tả những sự việc chưa xảy ra.\nVí dụ:\n你穿得那么少，会感冒的。\n别担心，我会照顾好自己。\n你不给他打电话吗，他会不高兴的。\n喝杯热茶会很舒服。\nNgữ pháp HSK 3 Phần 4",
            "ex_cn": "Trợ động từ 会 được dùng trong câu để chỉ khả năng, thường được sử dụng để diễn tả những sự việc chưa xảy ra.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "1. Cấu trúc 又。。。又",
            "usage": "Cấu trúc \" 又 + tính từ 1+又+ tính từ 2\" được dùng để nói về 2 đặc điểm cùng tồn tại ở 1 người hay sự vật, chẳng hạn 又高又漂亮 diễn tả rằng người nào đó cao và rất đẹp.\nVí dụ:\n这个西瓜又大又甜。\n外边又黑又冷。\n服务员又年轻又漂亮。\n她工作又认真有热情。",
            "ex_cn": "Cấu trúc \" 又 + tính từ 1+又+ tính từ 2\" được dùng để nói về 2 đặc điểm cùng tồn tại ở 1 người hay sự vật, chẳng hạn 又高又漂亮 diễn tả rằng người nào đó cao và rất đẹp.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "2. Cấu trúc: Động từ 1 + 着 + (tân ngữ 1) + động từ 2 + (tân ngữ 2)",
            "usage": "Cấu trúc \"động từ 1 + 着 + (tân ngữ 1) + động từ 2 + (tân ngữ 2)\" được dùng để diễn tả hai hành động xảy ra cùng lúc, trong đó hành động thứ nhất là hành động đi kèm hoặc cho biết phương thức thực hiện hành động thứ hai. Chẳng hạn, câu 他们站着聊天儿 có nghĩa là họ đang nói chuyện phiếm trong lúc đứng chứ không phải ngồi.\nVí dụ:\n弟弟吃着苹果写作业。\n周先生和周太太坐着看电视。\n很多人拿着鲜花站在门口。\n她总是笑着跟客人说话。\nNgữ pháp HSK 3 Phần 5",
            "ex_cn": "Cấu trúc \"động từ 1 + 着 + (tân ngữ 1) + động từ 2 + (tân ngữ 2)\" được dùng để diễn tả hai hành động xảy ra cùng lúc, trong đó hành động thứ nhất là hành động đi kèm hoặc cho biết phương thức thực hiện hành động thứ hai. Chẳng hạn, câu 他们站着聊",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "1. Trợ từ 了 chỉ sự thay đổi",
            "usage": "Trợ từ ngữ khí 了 được dùng ở cuối câu trần thuật để chỉ sự thay đổi trong một tình huống hoặc sự xuất hiện của một tình huống mới. Chẳng hạn câu 我现在没钱了 diễn tả sự thay đổi là trước kia tôi có tiền, nhưng hiện giờ thì không có nữa.\nVí dụ:\n上个月很冷，现在天气不那么冷了。\n我前几天有点儿发烧，现在好多了。\n我现在喜欢夏天了。\n这条裙子是去年买的，今年就不能穿了。",
            "ex_cn": "Trợ từ ngữ khí 了 được dùng ở cuối câu trần thuật để chỉ sự thay đổi trong một tình huống hoặc sự xuất hiện của một tình huống mới. Chẳng hạn câu 我现在没钱了 diễn tả sự thay đổi là trước kia tôi có tiền, nhưng hiện giờ thì không có nữa.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "2. Cấu trúc 越来越 + tính từ/động từ chỉ trạng thái tâm lý",
            "usage": "Cấu trúc “越来越 + tính từ/động từ chỉ trạng thái tâm lý” được dùng để chỉ sự thay đổi về mức độ theo thời gian, ví dụ: 越来越冷 （ngày càng lạnh）, 越来越喜欢 （ngày càng thích）. Lưu ý là không được thêm phó từ chỉ mức độ vào trước tính từ hoặc động từ chỉ trạng thái tâm lý (không được nói 越来越很热，越来越非常想）。\nVí dụ:\n我认识的汉字越来越多。\n你越来越漂亮。\n我越来越喜欢运功。\n我做的饭越来越好吃。\nNgữ pháp HSK 3 Phần 6",
            "ex_cn": "Cấu trúc “越来越 + tính từ/động từ chỉ trạng thái tâm lý” được dùng để chỉ sự thay đổi về mức độ theo thời gian, ví dụ: 越来越冷 （ngày càng lạnh）, 越来越喜欢 （ngày càng thích）. Lưu ý là không được thêm phó từ chỉ mức độ vào trước tính từ hoặc động từ c",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "1. Bổ ngữ chỉ khả năng：Động từ + 得/不 + bổ ngữ chỉ khả năng",
            "usage": "Cấu trúc \"Động từ + 得/不 + bổ ngữ chỉ khả năng\" được dùng để diễn tả rằng có thể thu được kết quả hoặc đạt được mục đích nào đó hay không. \"Động từ + 得 + bổ ngữ\" là hình thức khẳng định, còn \"động từ + 不 + bổ ngữ \" là hình thức phủ định. Bổ ngữ đứng sau 得 thường là bổ ngữ chỉ kết quả, bổ ngữ chỉ phương hướng, một số tính từ hoặc động từ. Hình thức nghi vấn của cấu trúc này là: \"động từ + 得 + bổ ngữ + động từ + 不 + bổ ngữ\" ,\"động từ + 得 + bổ ngữ +吗\"。\nVí dụ:\n我看得清楚那个汉字。\n楼太高了，我上不去。\n老师说的话你听得见听不见？\n我找不到好饭馆。",
            "ex_cn": "Cấu trúc \"Động từ + 得/不 + bổ ngữ chỉ khả năng\" được dùng để diễn tả rằng có thể thu được kết quả hoặc đạt được mục đích nào đó hay không. \"Động từ + 得 + bổ ngữ\" là hình thức khẳng định, còn \"động từ + 不 + bổ ngữ \" là hình thức phủ định. Bổ ",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "2. Cấu trúc hỏi vị trí: Danh từ + 呢",
            "usage": "Cấu trúc \"Danh từ + 呢\" được dùng để hỏi người hay sự vật nào đó ở đâu?, ví dụ: 妈妈呢？(mẹ đâu rồi)，小狗呢 (Con chó đâu rồi)？\nVí dụ:\nA: 你的书呢？放在哪儿了？\nB: 就在桌子上啊。\nA: 我的眼镜呢？你看见了吗？\nB: 我没看见啊。",
            "ex_cn": "Cấu trúc \"Danh từ + 呢\" được dùng để hỏi người hay sự vật nào đó ở đâu?, ví dụ: 妈妈呢？(mẹ đâu rồi)，小狗呢 (Con chó đâu rồi)？",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "3. 刚 và 刚才",
            "usage": "刚 là phó từ, 刚才 là danh từ, cả hai đều được dùng để chỉ hành động xảy ra cách đây không lâu, nhưng 刚才 thường mang nghĩa là cách đây vài phút, còn 刚 chỉ thời gian ngắn theo quan điểm của người nói (có thể là vài phút, vài ngày, thậm chí vài tháng). Ví dụ, câu 我刚来中国两个月 cho thấy đối với người nói, thời gian 2 tháng là rất ngắn. 刚 đứng trước động từ, 刚才 đứng trước động từ hoặc ở đầu câu.\n刚\n刚才\n爸爸刚出去。\n我刚喝完一杯咖啡。\n我刚放在桌子上，现在就没了。\n儿子刚做完作业。\n爸爸刚才出去了。\n刚才我喝了一杯咖啡。\n眼镜周明刚才放在桌子上了。\n刚才儿子在做作业。\nNgữ pháp HSK 3 Phần 7",
            "ex_cn": "刚 là phó từ, 刚才 là danh từ, cả hai đều được dùng để chỉ hành động xảy ra cách đây không lâu, nhưng 刚才 thường mang nghĩa là cách đây vài phút, còn 刚 chỉ thời gian ngắn theo quan điểm của người nói (có thể là vài phút, vài ngày, thậm chí vài ",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "1. Bổ ngữ thời lượng",
            "usage": "Dùng để diễn tả hành động/trạng thái xảy ra hoặc kéo dài trong khoảng thời gian bao lâu.\nCấu trúc: \"Chủ ngữ + động từ + 了 + khoảng thời gian + tân ngữ \" diễn tả khoảng thời gian mà hành động xảy ra.\nVí dụ:\n他工作了三年。\n我们坐了一个小时公共汽车。\n我们唱了两个小时歌。\nCấu trúc: \"Chủ ngữ + động từ + 了 + khoảng thời gian + tân ngữ + 了\" diễn tả khoảng thời gian mà hành động đã xảy ra và hành động đó vẫn đang tiếp diễn.\nVí dụ:\n我学习了一年汉语了。\n她看了半个小时电视了。\n他们游了二十分钟永了。",
            "ex_cn": "Cấu trúc: \"Chủ ngữ + động từ + 了 + khoảng thời gian + tân ngữ \" diễn tả khoảng thời gian mà hành động xảy ra.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "2. Cách diễn tả sự hứng thú",
            "usage": "Cấu trúc 对。。。感兴趣 và 对。。。有兴趣 thường được dùng để diễn tả sự hứng thú với điều gì đó.\nDạng phủ định: 对。。。不感兴趣 và 对。。。没(有)兴趣\nVí dụ:\n他们对电影感兴趣。\n我儿子对打篮球不感兴趣。\n同学们对汉语有兴趣。\n我对他更感兴趣。",
            "ex_cn": "Cấu trúc 对。。。感兴趣 và 对。。。有兴趣 thường được dùng để diễn tả sự hứng thú với điều gì đó.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "3. Cách diễn tả thời gian với 半，刻 hoặc 差",
            "usage": "1: 30 一点半\n12: 15 十二点一刻\n12:45 差一刻一点\n11: 55 差五分十二点。\nNgữ pháp HSK 3 Phần 8",
            "ex_cn": "1: 30 一点半",
            "ex_py": "Ngữ pháp HSK 3 Phần 8",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "1. 又 và 再",
            "usage": "Cả hai phó từ 又 và 再 đều có thể được dùng trước động từ để chỉ một hành động/tình huống được lặp lại.\n又 + động từ cho biết hành động/tình huống đó đã xảy ra\nVí dụ:\n上个星期我买了一条裙子，昨天又买了一条。\n你上午已经喝了一杯咖啡，下午怎么又喝了一杯？\n小刚，你前天迟到，昨天迟到，今天怎么又迟到了？\n再+ động từ cho biết hành động/tình huống đó chưa xảy ra.\nVí dụ:\n你只吃了一点儿饭，再吃一点儿吧。\n家里只有一个面包了，我们再买一些吧。\n那个饭馆我昨天去了一次，明天还想再去一次。",
            "ex_cn": "Cả hai phó từ 又 và 再 đều có thể được dùng trước động từ để chỉ một hành động/tình huống được lặp lại.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "2. Đại từ nghi vấn được sử dụng linh hoạt (1)",
            "usage": "就 có thể được dùng ở giữa hai đại từ nghi vấn giống nhau. Trong trường hợp này, hai đại từ nghi vấn không diễn tả nghi vấn mà chỉ đối tượng giống nhau.\nVí dụ:\n什么东西便宜我就买什么。\n你哪天有时间就哪天来我家吧。\n谁喜欢他他就喜欢谁。\n你坐哪儿我就坐哪儿。\nPhần 9",
            "ex_cn": "就 có thể được dùng ở giữa hai đại từ nghi vấn giống nhau. Trong trường hợp này, hai đại từ nghi vấn không diễn tả nghi vấn mà chỉ đối tượng giống nhau.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "1. Cấu trúc 越A越B",
            "usage": "Cấu trúc “越A越B”diễn tả ý B thay đổi theo sự biến đổi của A. Ví dụ:\n雨越下越大。\n你的中文越说越好。\n越往南，天气越热。\n山越高，路越难走。",
            "ex_cn": "Cấu trúc “越A越B”diễn tả ý B thay đổi theo sự biến đổi của A. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "2. Cấu trúc so sánh (1) A 跟 B 一样 (+tính từ)",
            "usage": "Cấu trúc “A跟 B一样” diễn tả ý A và B giống nhau. Nếu muốn chỉ rõ khía cạnh được so sánh, ta thêm tính từ vào sau cấu trúc này, chẳng hạn 一样大 có nghĩa là kích cỡ như nhau. Để có dạng phủ định, ta thêm 不 vào trước 一样 .\nVí dụ:\n这本书跟那本书一样。\n儿子跟爸爸一样高。\n这辆车的颜色跟那辆车不一样。\n她的汉语说得跟中国人一样好。\nPhần 10",
            "ex_cn": "Cấu trúc “A跟 B一样” diễn tả ý A và B giống nhau. Nếu muốn chỉ rõ khía cạnh được so sánh, ta thêm tính từ vào sau cấu trúc này, chẳng hạn 一样大 có nghĩa là kích cỡ như nhau. Để có dạng phủ định, ta thêm 不 vào trước 一样 .",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "1. Cấu trúc so sánh (2): A比 B + tính từ + 一点儿/一些/得多/多了",
            "usage": "Những từ như 一点儿，得多 hoặc 多了 … có thể được dùng sau tính từ trong câu có từ 比 để chỉ mức độ chênh lệch giữa các sự vật. 一点儿 và 一些 chỉ mức độ chênh lệch không lớn, còn 得多 và 多了 chỉ mức độ chênh lệch rất lớn. Ví dụ:\n大山比大卫矮一点儿。\n我今天起得比昨天晚一些。\n今天的作业比昨天多得多。\n数学比历史难多了。\nHình thức phủ định của cấu trúc này là “A没有B” (+这么/那么) +tính từ. Ví dụ:\n咖啡没有茶好喝。\n他没有我这么高。\n这个电影没有那个电影那么有意思。\n学校里边的（房子）没有学校外边的那么安静。",
            "ex_cn": "Những từ như 一点儿，得多 hoặc 多了 … có thể được dùng sau tính từ trong câu có từ 比 để chỉ mức độ chênh lệch giữa các sự vật. 一点儿 và 一些 chỉ mức độ chênh lệch không lớn, còn 得多 và 多了 chỉ mức độ chênh lệch rất lớn. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "2. Cách diễn tả số ước lượng (1)",
            "usage": "Trong tiếng Trung Quốc, hai từ chỉ số đếm liên tiếp có thể được đặt cạnh nhau để diễn tả số ước lượng, chẳng hạn 一两，两三，三四， 五六，七八，八九.\n我每天学习一两个小时汉语。\n你都喝了三四杯咖啡了，别再喝了。\n从小丽家到公司骑车七八分钟就能到。\n学校里边比学校外边方便，附近有三四车站。\nPhần 11",
            "ex_cn": "Trong tiếng Trung Quốc, hai từ chỉ số đếm liên tiếp có thể được đặt cạnh nhau để diễn tả số ước lượng, chẳng hạn 一两，两三，三四， 五六，七八，八九.",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "1. Câu có từ 把 (1) : A把B + động từ +...",
            "usage": "Mẫu câu \"A把B + động từ +...” chỉ một hành động được thực hiện và có tác động đến người/sự vật xác định thường được dùng để đưa ra đề nghị hay mệnh lệnh. Trong mẫu câu này, A là chủ thể của hành động còn B là đối tượng chịu tác động của hành động. Cả A và B phải là người/sự vật cụ thể hoặc những đối tương mà người nói và người nghe đều biết.\nVí dụ:\n请你把衣服洗了。\n帮我把这本词典还了。\n你把灯关了吧。\n我把爸爸的生日忘了。\nPhó từ phủ định, động từ năng nguyện...phải được đặt trước từ 把.\nVí dụ:\n你没把书给我。\n你别把手机忘了。\n我不能把电脑给你。\n你可以把空调关了吗？",
            "ex_cn": "Mẫu câu \"A把B + động từ +...” chỉ một hành động được thực hiện và có tác động đến người/sự vật xác định thường được dùng để đưa ra đề nghị hay mệnh lệnh. Trong mẫu câu này, A là chủ thể của hành động còn B là đối tượng chịu tác động của hành",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "2. Cách diễn tả số ước lượng(2) 左右",
            "usage": "Trong tiếng Trung Quốc, 左右 được dùng sau chữ số để diễn tả số ước lượng, chẳng hạn 三点左右(khoảng 3 giờ) ，五个左右(khoảng năm cái)，十年左右(khoảng mười năm)。\nVí dụ:\n周末我一般十点左右起床。\n我们公司有五百人左右。\n王经理两点左右来了个电话。\n这个笔记本电脑我去年买的时候要五千块左右。\nPhần 12",
            "ex_cn": "Trong tiếng Trung Quốc, 左右 được dùng sau chữ số để diễn tả số ước lượng, chẳng hạn 三点左右(khoảng 3 giờ) ，五个左右(khoảng năm cái)，十年左右(khoảng mười năm)。",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "1. 就 và 才",
            "usage": "就 và 才 đều có thể dùng trước động từ để làm trạng ngữ.\n就 diễn tả rằng theo quan điểm của người nói thì hành động xảy ra sớm hoặc được thực hiện nhanh chóng, thuận lợi.\nVí dụ:\n我早上五点就起床了。\n坐飞机一个小时就到了。\n我很容易就找到了他的家。\n你怎么这么早就要睡觉了？\n才 diễn tả rằng theo quan điểm của người nói thì hành động xảy ra muộn hoặc được thực hiện chậm trễ, không thuận lợi.\nVí dụ:\n八点上课，他九点才起床。\n坐火车八个小时才能到。\n弟弟三个小时才做完作业。\n来机场的路上我才发现忘带照护了。",
            "ex_cn": "就 và 才 đều có thể dùng trước động từ để làm trạng ngữ.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "2. Câu có từ 把(2): A把B + động từ + 在/到/给...",
            "usage": "Trong tiếng Trung Quốc, câu có từ 把 thường được dùng để diễn tả một hành động được thực hiện và có tác động đến người hoặc sự vật xác định, làm thay đổi vị trí của người hay sự vật đó. Cấu trúc: \"A把B + động từ + 在/到 + vị trí\".\nVí dụ:\n我把照片放在你包里了。\n老师把作业放在桌子上了。\n我没把裤子放到椅子上。\n我帮你把衣服放到行李箱里吧。\nMẫu câu \"A 把 B + động từ + 给 + người nào đó\" được dùng để diễn tả một hành động làm thay đổi người sở hữu hay sử dụng một vật.\nVí dụ:\n我把鲜花送给老师了。\n我朋友把书借给我了。\n弟弟没把钱还给哥哥。\n你帮我把这本书带给小丽。\nPhần 13",
            "ex_cn": "Trong tiếng Trung Quốc, câu có từ 把 thường được dùng để diễn tả một hành động được thực hiện và có tác động đến người hoặc sự vật xác định, làm thay đổi vị trí của người hay sự vật đó. Cấu trúc: \"A把B + động từ + 在/到 + vị trí\".",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "1. Bổ ngữ chỉ phương hướng dạng kết hợp",
            "usage": "Khi thêm bổ ngữ chỉ phương hướng đơn giản vào sau các động từ chỉ dạng phương hướng như..., ta có bổ ngữ chỉ phương hướng dạng kết hợp. Nó có thể được dùng làm bổ ngữ của động từ khác để chỉ phương hướng của hành động và miêu tả cụ thể hành động. Sau đây là những bổ ngữ chỉ phương hướng dạng kết hợp thường dùng:\n来\n上来\n下来\n进来\n出来\n回来\n过来\n起来\n去\n上去\n下去\n进去\n出去\n回去\n过去\n。。。\nVí dụ\n老师拿出一本书来。\n小狗从房间跑出来。\n我给你拿过去吧。\n坐久了还可以站起来休息一会儿。\nKhi tân ngữ là từ chỉ nơi chốn thì phải đặt tân ngữ trước 来/去。Ví dụ:\n老师走进教室来。\n周太太走进咖啡店去。\nKhi tân ngữ chỉ sự vật thông thường thì có thể đặt tân ngữ trước hoặc sau 来/去. Ví dụ:\n哥哥买回一个西瓜来/哥哥买回来一个西瓜。\n爸爸从国外带回一些礼物来/爸爸从国外带回来一些礼物。\nNếu hành động đã được hoàn thành hoặc thực hiện thì tân ngữ thường được đặt sau 来/去.\n哥哥买回来了一个西瓜。\n爸爸从国外带回来了一些礼物。",
            "ex_cn": "来",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "2. Cấu trúc 一边。。。一边。。。",
            "usage": "Cấu trúc 一边。。。一边。。。được dùng để diễn tả hai hành động được thực hiện cùng lúc, ví dụ 一边听音乐一边做作业 có nghĩa là vừa nghe nhạc vừa làm bài tập, 一 có thể được lược bỏ.\nVí dụ:\n妈妈一边唱歌一边做饭。\n老师边说边笑。\n小丽和老同学边喝咖啡边聊天儿。\n我丈夫喜欢一边吃早饭一边看报纸。\nPhần 14",
            "ex_cn": "Cấu trúc 一边。。。一边。。。được dùng để diễn tả hai hành động được thực hiện cùng lúc, ví dụ 一边听音乐一边做作业 có nghĩa là vừa nghe nhạc vừa làm bài tập, 一 có thể được lược bỏ.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "1. Câu có từ 把 (3)",
            "usage": "Câu có từ 把 (3): \"A 把 B + động từ + bổ ngữ chỉ kết quả/bổ ngữ chỉ phương hướng\" được dùng để diễn tả một hành động mang lại kết quả nào đó cho người hoặc một sự vật xác định, hoặc làm thay đổi vị trí của người hay sự vật đó.\nA 把 B\nđộng từ\nbổ ngữ chỉ kết quả/bổ ngữ chỉ phương hướng\n我把衣服\n洗\n干净了。\n妈妈还没把饭\n做\n好呢。\n请同学们把铅笔\n拿\n出来。\n你把水果\n拿\n过来。",
            "ex_cn": "Câu có từ 把 (3): \"A 把 B + động từ + bổ ngữ chỉ kết quả/bổ ngữ chỉ phương hướng\" được dùng để diễn tả một hành động mang lại kết quả nào đó cho người hoặc một sự vật xác định, hoặc làm thay đổi vị trí của người hay sự vật đó.",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "2. Cấu trúc 先。。。，再/又。。。，然后。。。",
            "usage": "Cấu trúc 先。。。，再/又。。。，然后。。。diễn tả trình tự của các hành động. 再 chỉ hành động chưa xảy ra, còn 又 chỉ hành động đã xảy ra. Ví dụ:\n回家以后，我先做作业，然后吃饭。\n我先坐了一个小时公共汽车，又坐了一会儿地铁才到小刚家。\n你先把电视节目看完吧，然后再给我回电话。\n先把米饭做好，然后再把一块新鲜的水果放进去。\nPhần 15",
            "ex_cn": "Cấu trúc 先。。。，再/又。。。，然后。。。diễn tả trình tự của các hành động. 再 chỉ hành động chưa xảy ra, còn 又 chỉ hành động đã xảy ra. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "1. Cấu trúc 除了。。。以外，都/还/也。。。",
            "usage": "Cấu trúc 除了。。。以外，都。。。được dùng để cho biết ngoại trừ thành phần được đề cập thì tất cả các phần còn lại trong một phạm vi nào đó đều có đặc điểm giống nhau, 以外 có thể được lược bỏ. Ví dụ:\n除了这个汉字以外，别的汉子我都认识。\n除了我以外，大家都听懂了。\n除了这个句子意思有些不清楚外，其他都没什么问题。\n除了小云，其他人都来了。\nCấu trúc 除了。。。以外，还/也。。。diễn tả ý vẫn còn có những thành phần khác có đặc điểm giống với thành phần được đề cập trước đó. Trong cấu trúc này, chủ ngữ được đặt ở đầu câu hoặc trước 还/也. Ví dụ:\n除了唱歌以外，他还喜欢跳舞。\n除了汉语以外，我还会说英语。\n上网除了看新闻，还可以听音乐。\n除了春节、中秋节以外，啤酒节也是这里很重要的一个节目。",
            "ex_cn": "Cấu trúc 除了。。。以外，都。。。được dùng để cho biết ngoại trừ thành phần được đề cập thì tất cả các phần còn lại trong một phạm vi nào đó đều có đặc điểm giống nhau, 以外 có thể được lược bỏ. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "2. Đại từ nghi vấn sử dụng linh hoạt (2)",
            "usage": "Trong tiếng Trung Quốc, 什么 có thể được dùng làm đại từ chỉ thị để thay thế người hoặc sự vật không xác định, thể hiện ngữ khí khách sáo hơn. Nghĩa của câu không thay đổi khi 什么 được lược bỏ. Ví dụ:\n这个饭馆有没有什么特别好吃的菜？\n周末你有没有什么打算？\n你写得很好，没什么问题。\n以后有什么不明白的地方，可以给我打电话或者发电子邮件。",
            "ex_cn": "Trong tiếng Trung Quốc, 什么 có thể được dùng làm đại từ chỉ thị để thay thế người hoặc sự vật không xác định, thể hiện ngữ khí khách sáo hơn. Nghĩa của câu không thay đổi khi 什么 được lược bỏ. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "3. Cách diễn tả mức độ 极了",
            "usage": "Cấu trúc \"tính từ/động từ chỉ trạng thái tâm lý + 极了\" có thể được dùng để diễn tả mức độ cao nhất. Ví dụ:\n我的小狗可爱极了。\n今天天气冷极了。\n那件衣服我喜欢极了。\n他满意极了。\nPhần 16",
            "ex_cn": "Cấu trúc \"tính từ/động từ chỉ trạng thái tâm lý + 极了\" có thể được dùng để diễn tả mức độ cao nhất. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "1. Cấu trúc 如果。。。（的话），（chủ ngữ） 就。。。",
            "usage": "Trong cấu trúc này, mệnh đề theo sau 如果 là giả thuyết, mệnh đề theo sau 就 là kết quả có được dựa trên giả thuyết đó. Lưu ý chủ ngữ của mệnh đề thứ hai phải được đặt trước 就。Ví dụ:\n如果你太累了，就休息一会儿。\n如果你喜欢，我就给你买。\n如果有钱的话，我就去旅游。\n如果不舒服，就去医院检查一下吧。",
            "ex_cn": "Trong cấu trúc này, mệnh đề theo sau 如果 là giả thuyết, mệnh đề theo sau 就 là kết quả có được dựa trên giả thuyết đó. Lưu ý chủ ngữ của mệnh đề thứ hai phải được đặt trước 就。Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "2. Bổ ngữ chỉ trạng thái phức tạp",
            "usage": "得 có thể được dùng để tạo thành bổ ngữ chỉ trạng thái nhằm miêu tả trạng thái nào đó. Thường thì đứng trước là tính từ hoặc động từ và theo sau là cụm động từ. Ví dụ:\n孩子们玩儿得不想回家。\n弟弟高兴得跳了起来。\n儿子累得下了班就睡觉了。\n人们忙得没时间跟别人见面。",
            "ex_cn": "得 có thể được dùng để tạo thành bổ ngữ chỉ trạng thái nhằm miêu tả trạng thái nào đó. Thường thì đứng trước là tính từ hoặc động từ và theo sau là cụm động từ. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "3. Tính từ có một âm tiết được lặp lại",
            "usage": "Tính từ có một âm tiết thường được dùng theo cách lặp lại \"tính từ + tính từ + 的“ để miêu tả đặc trưng của người hay sự vật với mức độ tăng thêm. Ví dụ:\n你送的花红红的，我很喜欢。\n这些草绿绿的，真漂亮。\n他鼻子小小的，长得像谁？\n你女儿长得白白的，胖胖的，真可爱。\nPhần 17",
            "ex_cn": "Tính từ có một âm tiết thường được dùng theo cách lặp lại \"tính từ + tính từ + 的“ để miêu tả đặc trưng của người hay sự vật với mức độ tăng thêm. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "1. Động từ có hai âm tiết được lặp lại",
            "usage": "Động từ có hai âm tiết với hình thức là ABAB (chẳng hạn 休息休息) khi muốn diễn tả hành động xảy ra trong thời gian ngắn hoặc cho biết ai đó thử làm việc gì. Ví dụ:\n他是谁? 你介绍 我们认识认识吧。\n他是新来的, 有时间你帮助帮助他吧。\n这是本新书，你学习学习吧。\n我真应该多锻炼锻炼了。",
            "ex_cn": "Động từ có hai âm tiết với hình thức là ABAB (chẳng hạn 休息休息) khi muốn diễn tả hành động xảy ra trong thời gian ngắn hoặc cho biết ai đó thử làm việc gì. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "2. Đại từ nghi vấn được sử dụng linh hoạt (3)",
            "usage": "Trong tiếng Trung Quốc, các đại từ nghi vấn như “谁”, “什么”, “怎么” và “哪儿” được dùng để thay thế mọi đối tượng trong một phạm vi nào đó, cho biết tất cả các đối tượng này đều có đặc điểm giống nhau, không có trường hợp ngoại lệ. Ví dụ:\n谁都喜欢小丽。\n小刚什么都喜欢吃。\n我们怎么去公园都可以。\n最近我觉得哪儿都不舒服。\nPhần 18",
            "ex_cn": "Trong tiếng Trung Quốc, các đại từ nghi vấn như “谁”, “什么”, “怎么” và “哪儿” được dùng để thay thế mọi đối tượng trong một phạm vi nào đó, cho biết tất cả các đối tượng này đều có đặc điểm giống nhau, không có trươ",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "1. Cấu trúc 只要。。。，就。。。",
            "usage": "只要。。。, 就。。。là cấu trúc được dùng để kết nối hai mệnh đề của một câu phức chỉ điều kiện. Theo sau 只要 là mệnh đề diễn tả điều kiện cần thiết, theo sau 就 là mệnh đề diễn tả kết quả tương ứng với điều kiện đó. Chủ ngữ có thể được đặt trước hoặc sau 只要. Nếu có chủ ngữ thứ hai thì phải đặt nó trước 就. Ví dụ:\n只要我有时间, 就一定跟你去旅游。\n我只要喜欢，就一定会买。\n只要你想去，我就跟你去。\n只要你给我买，我就能照顾好它。",
            "ex_cn": "只要。。。, 就。。。là cấu trúc được dùng để kết nối hai mệnh đề của một câu phức chỉ điều kiện. Theo sau 只要 là mệnh đề diễn tả điều kiện cần thiết, theo sau 就 là mệnh đề diễn tả kết quả tương ứng với điều kiện đo",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "2. Giới từ 关于",
            "usage": "关于 được dùng trước danh từ để giới thiệu về đối tượng mà người nói muốn đề cập đến. Ví dụ:\n我最近看了一些关于中国文化的电影。\n关于这件事，我们还没有决定呢。\n关于出国学习的事，妈妈己经同意了。\n关于这个工作，还有什么问题吗?\nPhần 19",
            "ex_cn": "关于 được dùng trước danh từ để giới thiệu về đối tượng mà người nói muốn đề cập đến. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "1. Nghĩa mở rộng của bổ ngữ chỉ phương hướng",
            "usage": "Trong tiếng Trung Quốc, bổ ngữ chỉ phương hướng có thể được dùng sau động từ hoặc tính từ và mang nghĩa khác.\n出来 được dùng sau động từ để chỉ sự xuất hiện của sự vật mới. Ví dụ:\n这个字你能写出来吗?\n朋友想出来一个学汉语的好办法。\n你画得真快，一会儿就画出来了。\n照片我选了几张洗出来了。\nĐộng từ 出来 theo sau còn diễn tả sự phân biệt, có nghĩa là hiển thị, bộc lộ ra. Ví dụ:\n你听出来了吗? 这是谁的声音?\n我看出来了，这是二年级的那个女孩子。\n我喝不出来这两杯咖啡有什么不一样。\n你没看出来吗? 他是小刚啊。\n下来 được dùng sau một số tính từ hoặc động từ để chỉ sự thay dổi, chẳng hạn từ trạng thái chuyển động sang trạng thái ngừng chuyển động, từ mạnh sang yếu, từ nhanh sang chậm. Ví dụ:\n前边的车越开越慢，停下来了。\n天黑下来了，孩子们要回家了。\n我真希望时间能慢下来，不要过得那么快。\n只要他爸爸学小鸟叫，她马上就安静下来了。\n起来 được dùng sau động từ để diễn tả (người nào đó) có hồi tưởng/ nhớ lại được điều gì đó hay không. Ví dụ:\n你记起来我是谁了吗?\n你能想起来那是什么时候的事吗?\n对不起, 我想不起来你的名字了。\n我想起来了，她小时候像个男孩子。\nChú ý: 看起来 không mang nghĩa là hồi tưởng lại/ nhớ lại điều gì mà diễn tả sự đánh giá hay ước lượng khía cạnh nào đó bằng cách nhìn ngắm, quan sát. 看上去 cũng thuộc trường hợp này và có nghĩa tương tự 看起来. Ví dụ:\n把头发放在耳朵后边，可以使脸看上去漂亮一些。\n他今天穿蓝西服，看上去像40多岁。\n这是你做的饭吗? 看起来很好吃。\n他今天一句话也没说，看起来有点儿不高兴。",
            "ex_cn": "出来 được dùng sau động từ để chỉ sự xuất hiện của sự vật mới. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "2. 使, 叫 và 让",
            "usage": "Trong tiếng Trung Quốc, 使, 叫 và 让 được dùng kết hợp với thành phần kiêm ngữ đứng sau (chỉ đối tượng nào đó) để diễn tả ý khiến cho. Về cơ bản ba từ này có nghĩa giống nhau nhưng 使 thường được dùng trong văn viết còn 叫 được dùng trong văn nói. Ví dụ:\n读书使我快乐。\n考试让我很紧张。\n穿运动服让他更年轻。\n我想快点儿把照片发给大家, 叫朋友们也高兴高兴。\nPhần 20",
            "ex_cn": "Trong tiếng Trung Quốc, 使, 叫 và 让 được dùng kết hợp với thành phần kiêm ngữ đứng sau (chỉ đối tượng nào đó) để diễn tả ý khiến cho. Về cơ bản ba từ này có nghĩa giống nhau nhưng 使 thường được dùng trong văn v",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "1. Câu có từ 被",
            "usage": "Câu có từ 被 có thể được dùng để diễn tả nghĩa bị động. Cấu trúc là “chủ ngữ + 被/叫/让 + tân ngữ + động từ + các thành phần khác”, trong đó chủ ngữ là đối tượng chịu tác động của hành động còn tân ngữ là chủ thể của hành động. Ta có thể lược bỏ tân ngữ đứng sau từ 被 nhưng không được lược bỏ tân ngữ đứng sau 叫 hay 让. Ví dụ:\n主语\n被/叫/让\n宾语\n动词\n其他\n我\n被\n男朋友\n影响\n了。\n慢子\n被\n刮\n跑\n了。\n蛋糕\n让\n弟弟\n吃完\n了。\n我的照相机\n被\n谁\n拿定\n了?\nLưu ý: phó từ phủ định, động từ năng nguyện... phải được đặt trước từ 被. Ví dụ:\n问题还没有被解决呢。\n病人还没被送到医院呢。\n下个月她会被妈妈送到美国。\n我们经常被别人认错。",
            "ex_cn": "Câu có từ 被 có thể được dùng để diễn tả nghĩa bị động. Cấu trúc là “chủ ngữ + 被/叫/让 + tân ngữ + động từ + các thành phần khác”, trong đó chủ ngữ là đối tượng chịu tác động của hành động còn tân ngữ là c",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        },
        {
            "structure": "2. Cấu trúc 只有。。。，才。。。",
            "usage": "只有。。。, 才。。。được dùng để kết nối hai thành phần của một câu phức chỉ điều kiện, trong đó thành phần đứng sau 才 diễn tả kết quả chỉ xuất hiện trong điều kiện này. Ví dụ:\n只有写完作业, 才能看电视。\n只有妈妈做的饭, 她才爱吃。\n只有爸爸, 妈妈才能分出来。\n看来只有爱, 才能让人有变化。",
            "ex_cn": "只有。。。, 才。。。được dùng để kết nối hai thành phần của một câu phức chỉ điều kiện, trong đó thành phần đứng sau 才 diễn tả kết quả chỉ xuất hiện trong điều kiện này. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-3.docx",
            "page": ""
        }
    ],
    "hsk4": [
        {
            "structure": "1. 不仅。。。也/还/而且。。。",
            "usage": "Liên từ 不仅 được dùng trong vế câu thứ nhất 也/还/而且 thường được dùng trong vế câu thứ\nhai dể diễn tả thông tin bổ sung bên cạnh thông tin đã được đề cập ở vế câu thứ nhất. Khi chủ\nngữ của hai vế câu giống nhau, 不仅 được đặt sau chủ ngữ; khi chủ ngữ của hai vế câu khác\nnhau, 不仅 được đặt trước chủ ngữ. Ví dụ:\n他不仅足球踢得好，性格也不错。\n小时候，他经常生病，所以每天都去跑步锻炼身体。谁也没有想到，长大以后，\n他不仅身体健康，还成了一名长跑运动员。\n我打算去云南（Yún nán, Vân Nam tên một tỉnh của Trung Quốc）玩儿，听说那\n边不仅很美，而且人也非常热情。",
            "ex_cn": "Liên từ 不仅 được dùng trong vế câu thứ nhất 也/还/而且 thường được dùng trong vế câu thứ",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "2. 从来",
            "usage": "Phó từ 从来 thường được dùng trong câu phủ định để diễn tả rằng sự vật/sự việc nào đó luôn có\ntính chất, đăc điểm như vậy từ trước đến nay. Ví dụ:\n老张这个人开会从来不迟到。今天到现在还没来，可能是有什么事情， 你打个\n电话问问他吧。\n虽然我们认识的时间不长，但我从来没这么快乐过。\n这家面馆从来只卖一种东西：牛肉面。因为面做得很好吃，而且不贵。很多新\n客人变成了老客人，老客人又带来更多新客人。",
            "ex_cn": "Phó từ 从来 thường được dùng trong câu phủ định để diễn tả rằng sự vật/sự việc nào đó luôn có",
            "ex_py": "tính chất, đăc điểm như vậy từ trước đến nay. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "3. 刚",
            "usage": "Phó từ 刚 chỉ hành động hay tình huống xảy ra cách đây không lâu, được dùng sau chủ ngữ và\ntrước động từ. Ví dụ:\n我上午刚借的那本书，怎么找不到了？\nA: 我刚从会议室过来，怎么一个人也没有？\nB: 对不起，今天的会议改到明天上午了。\n我和丈夫刚结婚的时候，每天都觉得很新鲜，在一起有说不完的话。",
            "ex_cn": "Phó từ 刚 chỉ hành động hay tình huống xảy ra cách đây không lâu, được dùng sau chủ ngữ và",
            "ex_py": "trước động từ. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "4. 即使。。。也。。。",
            "usage": "Liên từ 即使 được dùng trong vế câu thứ nhất, thường kết hợp với 也 trong vế câu thứ hai. Cấu\ntrúc này thường chỉ mối quan hệ nhượng bộ có tính chất giả thuyết và cũng có thể chỉ sự việc đã\ntồn tại hoặc xảy ra. 即使 có thể đứng trước hay sau chủ ngữ của vế câu thứ nhất.\nVí dụ:\n你应该多回家看看老人，即使只是跟他们吃吃饭，聊聊天，他们也会觉得很幸\n福。\n大部分人每天晚上最少应该睡 7 个小时，但有些人即使只睡 5 个小时也没问题。\n浪漫是即使晚上加班到零点，到家时，自己家里也还亮着灯。",
            "ex_cn": "Liên từ 即使 được dùng trong vế câu thứ nhất, thường kết hợp với 也 trong vế câu thứ hai. Cấu",
            "ex_py": "trúc này thường chỉ mối quan hệ nhượng bộ có tính chất giả thuyết và cũng có thể chỉ sự việc đã",
            "ex_vi": "Ví dụ:",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "5. （在）。。。上",
            "usage": "Danh từ chỉ phương vị 上 được dùng sau danh từ khác; 上 diễn tả ý bề trên mặt của vật nào đó,\nngoài ra từ này còn có nghĩa là trong phạm vi nào đó, xét về khía cạnh nào đó. Ví dụ:\n今天的作业是复习生词，明天课上听写。\n来北方好几年了吧？你觉得北方和南方在饮食上有什么不同？\n两个人共同生活，不仅需要浪漫的爱情，更需要性格上互相吸引。",
            "ex_cn": "Danh từ chỉ phương vị 上 được dùng sau danh từ khác; 上 diễn tả ý bề trên mặt của vật nào đó,",
            "ex_py": "ngoài ra từ này còn có nghĩa là trong phạm vi nào đó, xét về khía cạnh nào đó. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "6. 正好",
            "usage": "正好 có thể được dùng làm tính từ và mang ý nghĩa là vừa vặn, diễn tả đối tượng được đề cập\n(thời gian, vị trí, thể tích, số lượng, mức độ..) thỏa mãn điều kiện nào đó (không sớm không\nmuộn, không trước không sau, không to không nhỏ, không nhiều không ít, không cao không\nthấp..). Ví dụ:\n苹果八块五，西瓜十一块五，正好二十块。\n你来得正好，我的钱包不见了，借我点儿钱吧。\n正好 cũng có thể được dùng làm phó từ và mang ý nghĩa là đúng lúc, gặp được dịp nào đó để\nthực hiện việc gì. Ví dụ:\n我们下午要去踢足球，正好一起去吧。\n我妹妹出生那天，正好下雪，所以爸爸妈妈叫她“小雪”。",
            "ex_cn": "正好 có thể được dùng làm tính từ và mang ý nghĩa là vừa vặn, diễn tả đối tượng được đề cập",
            "ex_py": "(thời gian, vị trí, thể tích, số lượng, mức độ..) thỏa mãn điều kiện nào đó (không sớm không",
            "ex_vi": "muộn, không trước không sau, không to không nhỏ, không nhiều không ít, không cao không",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "7. 差不多",
            "usage": "差不多 có thể được dùng làm tính từ và mang ý nghĩa là xấp xỉ, khác biệt rất nhỏ. Ví dụ:\n这两个电子词典看上去差不多，左边这个怎么这么贵？\n他们俩是在国外旅行的时候认识的，性格差不多，所以很快就成了好朋友。\n差不多 cũng có thể được dùng làm phó từ để diễn tả rằng các đối tượng được đề cập là xấp xỉ,\ngần như nhau xét về các mặt như mức độ, phạm vi, thời gian, khoảng cách, số lượng...\nVí dụ:\nA:班里同学你联系得怎么样了？ 来多少人？\nB:差不多一半吧。",
            "ex_cn": "差不多 có thể được dùng làm tính từ và mang ý nghĩa là xấp xỉ, khác biệt rất nhỏ. Ví dụ:",
            "ex_py": "gần như nhau xét về các mặt như mức độ, phạm vi, thời gian, khoảng cách, số lượng...",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "8. 尽管",
            "usage": "Liên từ 尽管 thường được dùng ở vế thứ nhất của câu phức để đưa ra một sự thật. Vế câu thứ hai\ncho biết kết quả (vốn không xảy ra trong tình huống thông thường), được dùng kết hợp với các\ntừ ngữ biểu thị sự chuyển ý như 但是，可是，却，还是.\nVí dụ:\n尽管已经毕业这么多年，我们还是经常联系的。\n男朋友送给我的这份礼物尽管不贵，但却让我非常感动。\n叔叔最大的爱好就是打篮球，大学时他还多次参加校篮球比赛。尽管现在工作\n很忙，可到了周末他还是会跟朋友去打球。",
            "ex_cn": "Liên từ 尽管 thường được dùng ở vế thứ nhất của câu phức để đưa ra một sự thật. Vế câu thứ hai",
            "ex_py": "cho biết kết quả (vốn không xảy ra trong tình huống thông thường), được dùng kết hợp với các",
            "ex_vi": "Ví dụ:",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "9. 却",
            "usage": "Phó từ 却 được dùng sau chủ ngữ, trước động từ để chỉ sự chuyển ý với ngữ khí tương đối nhẹ\nnhàng.\nVí dụ:\n有人觉得房子和汽车就是幸福，有人却认为找到真正的爱情才是幸福。\n一个脾气不好的人虽然不一定让人讨厌，但是却很难跟人交朋友。\n现在很多人虽然住在同一个楼里，但是却从来没说过话。",
            "ex_cn": "Phó từ 却 được dùng sau chủ ngữ, trước động từ để chỉ sự chuyển ý với ngữ khí tương đối nhẹ",
            "ex_py": "nhàng.",
            "ex_vi": "Ví dụ:",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "10. 而",
            "usage": "Liên từ 而 được dùng trong câu phức để nối hai vế câu, có thể biểu thị quan hệ đồng đẳng.\nVí dụ:\n“明”字，左边的“日”意思是太阳，而右边的“月”意思是月亮。\n结婚前，我们都要清楚自己想要的是什么，而不要被别人对幸福的看法影响。\n而 cũng có thể được dùng để biểu thị quan hệ chuyển ý.Ví dụ:\n在工作中遇到了问题，男人回到家不喜欢跟妻子说，而女人喜欢跟丈夫说。\n有些人觉得朋友就是能和自己一起快乐的人，而我的理解是：当你遇到困难的\n时候，真正的朋友会站出来，及时给你帮助。",
            "ex_cn": "Liên từ 而 được dùng trong câu phức để nối hai vế câu, có thể biểu thị quan hệ đồng đẳng.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "11. 挺",
            "usage": "Phó từ 挺 có nghĩa là rất, thường được dùng trong cấu trúc 挺。。的.\nVí dụ:\n他们问的问题都挺容易的。\n这家店的东西挺好的，我经常来这儿买东西。\n我挺喜欢这个地方的，周围环境比以前住的地方安静得多。",
            "ex_cn": "Phó từ 挺 có nghĩa là rất, thường được dùng trong cấu trúc 挺。。的.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "12. 本来",
            "usage": "Phó từ 本来 diễn tả rằng tình huống/sự việc nào đó đáng lẽ phải như vậy. 本来 cũng mang ý\nnghĩa là lúc đầu, trước đây.\nVí dụ:\n这件事本来应该听他的。\n我本来不会开车，但现在开得特别好。\n（这次招聘）本来是小李负责的.",
            "ex_cn": "Phó từ 本来 diễn tả rằng tình huống/sự việc nào đó đáng lẽ phải như vậy. 本来 cũng mang ý",
            "ex_py": "nghĩa là lúc đầu, trước đây.",
            "ex_vi": "Ví dụ:",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "13. 另外",
            "usage": "Đại từ 另外 chỉ người hay sự vật bên ngoài phạm vi đã được đề cập trước đó, thường được dùng\ntrong cấu trúc“另外（+的）+ Số lượng (+Danh từ)” hay “另外+ 的(+Danh từ)”. Ví dụ：\n前面车有点儿多，我们走另外一条路，不会迟到的。\n这件衣服有点儿大，你试试另外的那件吧。\nPhó từ 另外 diễn tả ý bên ngoài phạm vi đã được đề cập trước đó, thường được dùng kết hợp với\n还/再/又. Ví dụ:\n除了她说的，我另外又补充了几条意见。\n家里的空调坏了，咱们另外再买一个吧。\nLiên từ 另外 có nghĩa là ngoài ra, được dùng để nối các vế câu hoặc các câu. Ví dụ:\n我学的就是法律专业，而且同事们都很喜欢我。另外，收入很不错。\n现在上网买东西很方便，卖家可以把你买的东西送到你办公室或者家里。另外，\n还比较便宜。",
            "ex_cn": "Đại từ 另外 chỉ người hay sự vật bên ngoài phạm vi đã được đề cập trước đó, thường được dùng",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "14. 首先。。。其次。。。",
            "usage": "首先 và 其次 là đại từ, thường được dùng kết hợp trong văn viết để liệt kê các sự việc theo trình\ntự nào đó. Ví dụ:\n不管做什么事情，首先应该明白你为什么要做，其次要知道怎么做。\n首先，要穿正式的衣服，这会给面试者留下一个好的印象，让他觉得你是一个\n认真的人。其次应聘时不要紧张。\n首先 cũng có thể được dùng làm phó từ với ý nghĩa là đầu tiên, sớm nhất. Ví dụ:\n不管以后做什么工作，你首先应该有一个好身体。\n很多人遇到不明白的地方，首先想到的是上网查一查。",
            "ex_cn": "首先 và 其次 là đại từ, thường được dùng kết hợp trong văn viết để liệt kê các sự việc theo trình",
            "ex_py": "tự nào đó. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "15. 不管",
            "usage": "Liên từ 不管 chỉ kết luận hay kết quả sẽ không thay đổi trong mọi tình huống được giả định,\nthường được dùng chung với các đại từ nghi vấn như 什么，怎么，谁，哪儿 và 多（么）.\nNgười ta cũng thường sử dụng 不管 kết hợp với 还是 hay mẫu câu chính phản, khi đó vế câu thứ\nhai thường có 都 hoặc các từ khác.\nVí dụ:\n山本不管做什么事情都非常认真。\n不管是上课、上班，还是与别人约会，准时都非常重要。\n不管忙不忙，他每天都要锻炼一个小时身体。",
            "ex_cn": "Liên từ 不管 chỉ kết luận hay kết quả sẽ không thay đổi trong mọi tình huống được giả định,",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "16. 以为",
            "usage": "Động từ 以为 thường được dùng để chỉ việc gì đó không phải là sự thật.\nVí dụ:\n她汉语说得那么好，我还以为她是中国人。\n马克以为今天是星期一，到了学校一看，没人来上课，才发现今天是星期天。\n我以为新工作比以前的好，没想到还没有以前好呢。",
            "ex_cn": "Động từ 以为 thường được dùng để chỉ việc gì đó không phải là sự thật.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "17. 原来",
            "usage": "原来 có thể được dùng làm danh từ với nghĩa là ban đầu, trước đây, chỉ tình huống được miêu\ntả trong vế câu hay câu theo sau nó khác với tình huống trước đây. Ví dụ:\n坐火车从北京到上海，原来最快差不多需要 12 个小时，现在有了高铁，5 个小\n时就能到。\n原来 có thể được dùng làm tính từ với nghĩa là đầu tiên, không thay đổi. Nó không thể đứng 1\nmình làm vị ngữ. Khi 原来 bổ nghĩa cho danh từ, sau nó phải có 的. Ví dụ:\n按原来的计划应该是两周，但是我们可以提前完成。\n原来 cũng có thể được dùng làm phó từ để chỉ một khoảng thời gian nào đó trước đây, hàm ý\nngười/sự vật nào đó hiện giờ không còn giống như trước.\n她原来是汉语老师，现在已经成了一名律师。\nKhi làm phó từ 原来 còn chỉ việc phát hiện ra tình huống mà trước đây không biết. 原来 có thể\nđứng trước hoặc sau chủ ngữ. Ví dụ:\n马克一直等李明回电话，可是电话一晚上都没来，原来李明把马克的电话号码\n记错了。",
            "ex_cn": "原来 có thể được dùng làm danh từ với nghĩa là ban đầu, trước đây, chỉ tình huống được miêu",
            "ex_py": "tả trong vế câu hay câu theo sau nó khác với tình huống trước đây. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "18. 并",
            "usage": "Phó từ 并 được dùng trước các từ phủ định như 不/没（有）để nhấn mạnh ngữ khí phủ định.\nNgười ta thường sử dụng từ này trong các câu chỉ sự chuyển ý nhằm phủ định quan điểm nào đó\nvà giải thích tình hình thực tế. Ví dụ:\n其实，人们将来做什么工作可能和上学学的专业并没有太大关系。\n我原来以为做生意很简单，后来才发现其实并不容易。\n根据调查，人每天晚上最少应该睡 7 个小时，但是这并不适合每一个人。",
            "ex_cn": "Phó từ 并 được dùng trước các từ phủ định như 不/没（有）để nhấn mạnh ngữ khí phủ định.",
            "ex_py": "Người ta thường sử dụng từ này trong các câu chỉ sự chuyển ý nhằm phủ định quan điểm nào đó",
            "ex_vi": "và giải thích tình hình thực tế. Ví dụ:",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "19. 按照",
            "usage": "Giới từ 按照 có nghĩa là theo, dựa vào, căn cứ vào. Ví dụ:\n我们今年的工作都已经按照计划完成了。\n这回材料都按照银行的要求准备好了吗？\n按照经验，这个问题应该可以很快解决，请大家放心。",
            "ex_cn": "Giới từ 按照 có nghĩa là theo, dựa vào, căn cứ vào. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "20. 甚至",
            "usage": "Phó từ 甚至 nhấn mạnh một ví dụ nổi bật, có thể được đặt trước mục cuối cùng của các danh từ,\nđộng từ hay vế câu đồng đẳng để làm nổi bật mục này. Ví dụ:\n这个房子离您公司也不远，您可以做公共汽车甚至可以骑自行车上班。\n很多时候，我们不得不去做一些自己不愿意做甚至是非常不喜欢的工作。\n迟到会让别人觉得你没有责任心，使你错过重要的机会，甚至会让别人不再相\n信你。",
            "ex_cn": "Phó từ 甚至 nhấn mạnh một ví dụ nổi bật, có thể được đặt trước mục cuối cùng của các danh từ,",
            "ex_py": "động từ hay vế câu đồng đẳng để làm nổi bật mục này. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "21. 肯定",
            "usage": "肯定 có thể được dùng làm phó từ với nghĩa là nhất định, không nghi ngờ. Ví dụ:\n您放心，质量肯定不“打折”\n每天喝一点儿葡萄酒，对身体是有好处的。但是不能喝太多，喝太多酒肯定对\n身体不好。\n肯定 cũng có thể được dùng làm tính từ và mang ý nghĩa là chắc chắn, rõ ràng. Ví dụ:\n不能肯定的事，没发生过的事，最好不要说。\nKhi làm tính từ, 肯定 còn có nghĩa là thừa nhận, đúng. Ví dụ:\n“你羡慕浪漫的爱情吗？”相信大部分人的回答都是肯定的。",
            "ex_cn": "肯定 có thể được dùng làm phó từ với nghĩa là nhất định, không nghi ngờ. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "22. 再说",
            "usage": "再说 có thể được dùng làm động từ, diễn tả ý gác lại (việc gì) để giải quyết hay suy sét sau. Ví\ndụ:\n现在的事，做了再说；以后的事，以后再说。\nA：你不是很喜欢那件大衣吗？ 怎么不买了呢？\nB：我真的很喜欢，不过没我的号了，下次再说吧。\n再说 cũng có thể được dùng làm liên từ để bổ sung một số tình huống nữa cho những điều đã\nđược đề cập trước đó. Ví dụ:\n今天买的东西太多了。再说， 这个月家里已经花 了五千多了。\nA: 你飞机几点的？怎么还不准备？\nB：晚上八点的，不用急，再说，我就去几天，不用带多少东西。",
            "ex_cn": "再说 có thể được dùng làm động từ, diễn tả ý gác lại (việc gì) để giải quyết hay suy sét sau. Ví",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "23. 实际",
            "usage": "实际 có thể được dùng làm danh từ để chỉ sự vật hay tình huống tồn tại khách quan. Ví dụ:\n你们做计划应该联系实际。\n实际 cũng có thể được dùng làm tính từ và mang nghĩa thực tế, cụ thể. Ví dụ:\nA： 听说你大学二年级的时候就开始在广告公司工作了。这样做不会影响你的学习吗？\nB： 我认为不会，实际工作能让我更理解书本上的知识。\nPhó từ 实际上 có nghĩa là trong thực tế, thường được dùng để chuyển ý. Ví dụ:\n要想别人对你好，你得先对别人好。实际上，我们很多人做不到这一点。\n广告只会介绍优点，却不会说它的缺点。实际上，很多东西并不像广告上说的\n那么好，所以不能完全相信广告。",
            "ex_cn": "实际 có thể được dùng làm danh từ để chỉ sự vật hay tình huống tồn tại khách quan. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "25. 对。。。来说",
            "usage": "对。。。来说 diễn tả ý nhìn nhận vấn đề từ góc độ nào đó. Ví dụ:\n对我来说，衣服的样子流行不流行并不是很重要。\n对一个女人来说，漂亮，聪明都很重要，但其实更重要的是快乐。\n一杯水，对一条小鱼来说，可能很有帮助，它可以在里面游得很好。但是，对\n一条大鱼来说，一杯水是没有什么帮助的，它需要的是一条河。",
            "ex_cn": "对。。。来说 diễn tả ý nhìn nhận vấn đề từ góc độ nào đó. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "26. 尤其",
            "usage": "Phó từ 尤其 chỉ mức độ tăng thêm. Vế câu thứ nhất thường đưa ra một tình huống tổng thể, vế\ncâu thứ hai dùng 尤其 để chỉ ra khía cạnh nổi bật nhất trong tình huống tổng thể đó. Ví dụ:\n您女儿真可爱，长得真像您，尤其是眼睛.\n现在网上购物变得越来越流行了，念经人尤其喜欢在网上买东西。\n为了健康，我们应该每年都去医院做一次身体检查，尤其是那些四五十岁的人，\n这样可以早一下发现问题。",
            "ex_cn": "Phó từ 尤其 chỉ mức độ tăng thêm. Vế câu thứ nhất thường đưa ra một tình huống tổng thể, vế",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "27. 竟然 không ngờ, vậy mà",
            "usage": "Phó từ 竟然 được dùng trước động từ hoặc tính từ để chỉ sự việc không ngờ, nằm ngoài dự đoán.\nVí dụ:\n这个歌特别好听，最近很流行，你竟然没听过？\n来这家饭馆吃饭的人竟然这么多，排队都排到门口外边去了。\n回家以后，我才发现，竟然忘了去商场的超市买果汁。",
            "ex_cn": "Phó từ 竟然 được dùng trước động từ hoặc tính từ để chỉ sự việc không ngờ, nằm ngoài dự đoán.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "28. 倍",
            "usage": "Lượng từ 倍 chỉ số lần. Đây là lượng từ độc lập. Thông thường theo sau 倍 không có danh từ. Ví\ndụ:\n二的五倍是十\n我的工资是每月 5000 块，他的工资是我的两倍。\n我记得昨天才三块五一斤，今天的价格是昨天的两倍。",
            "ex_cn": "Lượng từ 倍 chỉ số lần. Đây là lượng từ độc lập. Thông thường theo sau 倍 không có danh từ. Ví",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "29. 值得 đáng",
            "usage": "Động từ 值得 diễn tả rằng việc gì đó đáng được thực hiện và sẽ mang lại kết quả tốt. Ví dụ:\n您看看这个，不管从价格方面看，还是从质量上看，都是值得考虑的。\n你应该改改自己的脾气，别总是为一点儿小事生气，不值得。\n我们总是很容易看到一个人的缺点，但是别忘了，他身上的优点更值得我们去\n发现，去学习。",
            "ex_cn": "Động từ 值得 diễn tả rằng việc gì đó đáng được thực hiện và sẽ mang lại kết quả tốt. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "30. 其中 trong đó, trong số đó",
            "usage": "Danh từ 其中 được dùng để chỉ phạm vi hay vị trí. Ví dụ:\n我们不仅要会读书，还要会选择其中的好书来读。\n虽然妻子工作很忙，但是她忙在其中也乐在其中。\n一些图书还有打折活动，其中，小说 7.5 折，地图 8 折，留学考试用书 6 折。",
            "ex_cn": "Danh từ 其中 được dùng để chỉ phạm vi hay vị trí. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "31. （在）。。。下 trong..., dưới...",
            "usage": "Thành phần đứng giữa “(在)。。。下” thường là một danh từ hay động từ có hai âm tiết kèm từ\nbổ nghĩa đứng trước nó. Cấu trúc này được dùng để chỉ một điều kiện, tình huống. Ví dụ:\n一般情况下，你花的钱越多，买的东西也就越好。\n在冬天比较冷的情况下，吃碗热面条会让人觉得很舒服。\n在老师和同学们的帮助下，他的汉语提高得非常快。",
            "ex_cn": "Thành phần đứng giữa “(在)。。。下” thường là một danh từ hay động từ có hai âm tiết kèm từ",
            "ex_py": "bổ nghĩa đứng trước nó. Cấu trúc này được dùng để chỉ một điều kiện, tình huống. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "32. 估计 dự đoán",
            "usage": "Động từ 估计 có nghĩa là đưa ra suy đoán chung chung về sự vật dựa vào những điều kiện nào\nđó. Ví dụ:\n我还不习惯北方的气候，估计是天气太干。\n你有没有去问问小王？估计他应该有办法。\n机场通知飞机晚点一个小时，估计他下午六点才能到上海。",
            "ex_cn": "Động từ 估计 có nghĩa là đưa ra suy đoán chung chung về sự vật dựa vào những điều kiện nào",
            "ex_py": "đó. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "33. 来不及 không kịp",
            "usage": "Động từ 来不及 diễn tả rằng do thời gian ngắn nên người nào đó không kịp làm việc gì. 来不及\ncó thể được dùng độc lập hoặc có thể có động từ theo sau. Ví dụ:\n等你身体出现问题了，后悔就来不及了。\n今天来不及开会了，明天我们再找时间说这个问题吧。\n你不是和同学约了下午两点见面吗？再不走就来不及了。",
            "ex_cn": "Động từ 来不及 diễn tả rằng do thời gian ngắn nên người nào đó không kịp làm việc gì. 来不及",
            "ex_py": "có thể được dùng độc lập hoặc có thể có động từ theo sau. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "34. 离合词重叠 từ ly hợp lặp lại",
            "usage": "Sự lặp lại của từ ly hợp diễn tả các ý như thời gian ngắn, việc làm thử, sự nhẹ nhàng, tùy tiện.\nHình thức lặp lại là “AAB”, chẳng hạn:散散步，帮帮忙，睡睡觉，游游泳。 Hãy xem các ví\ndụ sau:\n咱们午饭后就去附近的公园散散步吧。\n行李箱怎么这么重啊！你快来帮帮我的忙。\n周末马克一般在宿舍看看书， 听听音乐，睡睡觉。",
            "ex_cn": "Hình thức lặp lại là “AAB”, chẳng hạn:散散步，帮帮忙，睡睡觉，游游泳。 Hãy xem các ví",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "35. 要是 nếu",
            "usage": "Liên từ 要是 thường được dùng trong cấu trúc “要是。。。（的话），就。。. Vế câu sử dụng\n要是 đưa ra một giả thuyết, vế câu sử dụng 就 chỉ hành động được thực hiện hay kết quả xuất\nhiện trong tình huống xảy ra giả thuyết đó. Ví dụ:\n要是健康是 1，其他都是 1 后面的 0\n要是你想来中国的大学留学，和中国学生一起学习专业课，那么就需要做好这\n些准备。\n要是质量比别人的好的话，那么价格贵一点儿也是可以接受的。",
            "ex_cn": "Liên từ 要是 thường được dùng trong cấu trúc “要是。。。（的话），就。。. Vế câu sử dụng",
            "ex_py": "hiện trong tình huống xảy ra giả thuyết đó. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "36. 既。。。又/也/还。。。đã...lại..., vừa...vừa...",
            "usage": "“既。。。又/也/还。。。” được dùng để nối hai cấu trúc mang đặc điểm của động từ hoặc tính\ntừ (hai cấu trúc thường giống nhau) nhằm diễn tả hai tình huống (đều mang nghĩa tích cực hoặc\nđều mang nghĩa tiêu cực) tồn tại cùng lúc. Ví dụ:\n散步是生活中最简单的锻炼方法，既可以活动身体，又可以减肥。\n成功离不开交流，交流自然需要说活，会说话的人既容易交到朋友，也容易获\n得成功。\n他那个人做事既不认真，动作还慢，这个工作这么重要，还是让别人做吧。",
            "ex_cn": "“既。。。又/也/还。。。” được dùng để nối hai cấu trúc mang đặc điểm của động từ hoặc tính",
            "ex_py": "từ (hai cấu trúc thường giống nhau) nhằm diễn tả hai tình huống (đều mang nghĩa tích cực hoặc",
            "ex_vi": "đều mang nghĩa tiêu cực) tồn tại cùng lúc. Ví dụ:",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "37. 使 khiến cho, làm cho",
            "usage": "Động từ 使 có nghĩa là (tương tự 让) thường được dùng trong văn viết. Ví dụ\n她看都没看过我一眼，怎么样才能使她喜欢我呢？\n在中国生活的三年使他在音乐方面有了很多新的想法。\n听说伤心难过的时候吃块儿巧克力，还能使人的心情变得愉快。",
            "ex_cn": "Động từ 使 có nghĩa là (tương tự 让) thường được dùng trong văn viết. Ví dụ",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "38. 只要",
            "usage": "Liên từ 只要 thường được dùng trong cấu trúc câu “只要。。。就”. Vế của câu đứng sau 只要\nđưa ra một điều kiện cần thiết, vế câu đứng sau 就 chỉ kết quả của điều kiện này. Ví dụ:\n只要这次你好好儿准备，一定能把比赛踢好。\n只要你用心就会发现，身边有那么多有意思的事情，有那么多不一样的生活。\n每个人对幸福有不同的理解，对我来说，只要能做自己喜欢的事，就是幸福。",
            "ex_cn": "Liên từ 只要 thường được dùng trong cấu trúc câu “只要。。。就”. Vế của câu đứng sau 只要",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "39. 可不是",
            "usage": "Phó từ 可不是 được sử dụng để bày tỏ sự tán thành hoặc đồng cảm với những điều người khác\nnói, thường đứng độc lập tạo thành một câu (cũng có thể dùng 可不). Ví dụ:\nA: 没想到咱们毕业都已经十年了。\nB： 可不是，时间过得太快了，真想大家。\nA: 遇到堵车，心情也“堵”。\nB： 可不是！上班堵车怕迟到，下班堵车怕回家晚。\nA：这家网球馆的服务不错，给我的印象很好。\nB： 可不是，这儿不仅环境好，还免费提供吃的和水，打球打累的 时候，可以吃点儿东\n西休息一下。",
            "ex_cn": "Phó từ 可不是 được sử dụng để bày tỏ sự tán thành hoặc đồng cảm với những điều người khác",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "40. 因此 vì vậy",
            "usage": "Liên từ 因此 gần nghĩa với 所以 nhưng không được dùng kết hợp với 因为. Ví dụ:\n我认识他很多年，因此，很了解他的生活。\n每个学生的性格、能力不同，因此，老师要根据学生的特点，用不同的方法。\n生活的态度要自己选择，因此，遇到烦恼时，你应该想一些办法让自己从不高\n兴的心情中走出来。",
            "ex_cn": "Liên từ 因此 gần nghĩa với 所以 nhưng không được dùng kết hợp với 因为. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "42. 往往",
            "usage": "Phó từ 往往 chỉ tình huống nào đó thường xảy ra trong điều kiện nhất định, thường được dùng\nđể nói về những sự việc có tính quy luật. Ví dụ:\n女孩子对衣服颜色的选择往往与他们的性格有关。\n有经验的出租车司机往往对道路情况都非常熟悉，他们知道一天的每个时段什\n么地方可能堵车。\n除了正式的名字，中国人一段都有一个小名，在家里，父母往往只叫孩子的小\n名。",
            "ex_cn": "Phó từ 往往 chỉ tình huống nào đó thường xảy ra trong điều kiện nhất định, thường được dùng",
            "ex_py": "để nói về những sự việc có tính quy luật. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "43. 难道",
            "usage": "Phó từ 难道 nhấn mạnh ngữ khí của câu hỏi tu từ. Khi 难道 được dùng trong câu hỏi tu từ khẳng\nđịnh, cả câu mang nghĩa phủ định và ngược lại, chẳng hạn câu 难道汉语真的这么难吗？có\nhàm ý người nói nhấn mạnh tiếng Trung Quốc không khó. Ví dụ:\n怎么又买了这么多饼干和巧克力？难道你不减肥了？\nA：喂，都十点了，你怎么还没来？\nB：难道你没有看短信？我今天有事去不了了。\nA： 你不是两点就出发了吗？难道路上花了两个多小时？\nB： 我那辆车出了点儿问题，刚才把车送去修了。",
            "ex_cn": "Phó từ 难道 nhấn mạnh ngữ khí của câu hỏi tu từ. Khi 难道 được dùng trong câu hỏi tu từ khẳng",
            "ex_py": "hàm ý người nói nhấn mạnh tiếng Trung Quốc không khó. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "45. 通过",
            "usage": "通过 có thể được dùng làm giới từ để diễn tả ý đạt được mục đích nhất định nhờ người nào đó\nhay bằng phương tiện/cách thức nào đó. Ví dụ:\n任何成功都要通过努力才能得到。\n这个节目我一直在看，它介绍了很多生活中的小知识。 很多以前我没有注意到\n的问题，现在通过它了解了不少。\n通过 cũng có thể được dùng làm động từ để chỉ việc đi qua nơi nào đó từ đầu này/phía này\nđến đầu kia/phía kia. Ví dụ:\n这条街只能步行通过。\nĐộng từ 通过 cũng mang nghĩa là phù hợp với một tiêu chuẩn nhất định hay đạt được yêu\ncầu nào đó. Ví dụ:\n我通过那家公司的面试了，经理贵我印象不错，他要我明天就正式去上班。",
            "ex_cn": "通过 có thể được dùng làm giới từ để diễn tả ý đạt được mục đích nhất định nhờ người nào đó",
            "ex_py": "hay bằng phương tiện/cách thức nào đó. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "46. 可是",
            "usage": "Liên từ 可是 được dùng ở vế câu sau của câu phức để chỉ sự chuyển ý. 虽然 thường được dùng ở\nvế câu trước để kết hợp với 可是. Ví dụ:\nA:你怎么又想换工作了，这儿的收入不是挺高的吗？\nB：虽然收入高，可是经常要加班，很少有时间和家人在一起。\n小时候，他家都说我像我妈，尤其是性格。可是长大后，他们说我更像爸爸。\n当时她的父母和亲戚都不支持她，可是她坚持自己的选择，现在终于向所有人证明了她的\n选择是正确的。",
            "ex_cn": "Liên từ 可是 được dùng ở vế câu sau của câu phức để chỉ sự chuyển ý. 虽然 thường được dùng ở",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "47. 结果",
            "usage": "结果 có thể được dùng làm danh từ để chỉ trạng thái cuối cùng trong diễn biến của sự việc, Ví dụ:\n小张，你这份计划书写得不错，就按照这个计划去做市场调查吧。下个月把调查结果交上\n来。\n如果你想做什么事情，那就勇敢地去做，不要担心结果，不要考虑会不会失败。\n结果 cũng có thể được sử dụng làm liên từ chỉ quan hệ nhân quả. Người ta dùng 结果 ở vế câu\nsau để diễn tả kết quả của tình huống được đề cập ở vế câu trước.\nVí dụ:\n我妻子想减肥，所以她每天早上都去骑马。结果马竟然在一个月之内瘦了二十\n斤。\n有些人爱说“差不多”。例如，每天的工作都是完成得差 不多，结果，积累下来，\n就变成差很多了。",
            "ex_cn": "结果 có thể được dùng làm danh từ để chỉ trạng thái cuối cùng trong diễn biến của sự việc, Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "49. 上",
            "usage": "Động từ 上 diễn tả ý đạt đến hoặc đủ (số lượng hay mức độ nhất định), theo sau nó thường là tân\nngữ chỉ số lượng. Ví dụ:\n这个城市的地铁已经有上百年的 历史了。\n每年有成千上万的高中毕业生参加艺术考试。\n爱迪生就是在找了上千种材料后才找到了能点亮电灯的材料。",
            "ex_cn": "Động từ 上 diễn tả ý đạt đến hoặc đủ (số lượng hay mức độ nhất định), theo sau nó thường là tân",
            "ex_py": "ngữ chỉ số lượng. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "50. 不过",
            "usage": "不过 có thể được dùng làm liên từ và được đặt ở đầu vế câu sau để chỉ sự chuyển ý, bổ sung và\nđiều chỉnh ý của vế câu trước. Ví dụ:\n我现在上有老，下有小。除了工作以外，家里还有母亲和儿子需要照顾。不过\n现在我很幸福。\n你再早来一会儿就好了，那辆车刚开走，你只能等下一辆了。不过也不用多长\n时间，估计十几分钟就来了。\n不过 cũng có thể được dùng làm phó từ với nghĩa là chỉ để nhấn mạnh số lượng hay phạm vi\nnhỏ. Ví dụ:\n我们不过谈了点儿工作方面的问题，别的都没谈。\nA：没有你的帮助，我们肯定不能按时完成任务，真是太谢谢你了。\nB： 你太客气了，我不过是给了些建议，这一切都是你们辛苦努力的结果。",
            "ex_cn": "不过 có thể được dùng làm liên từ và được đặt ở đầu vế câu sau để chỉ sự chuyển ý, bổ sung và",
            "ex_py": "điều chỉnh ý của vế câu trước. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "51. 确实",
            "usage": "Phó từ 确实 được dùng để khẳng định tính xác thực của một tình huống khách quan. Ví dụ:\n爱情确实是结婚的重要原因，但仅有爱情是不够的。\nA：好几年没见，你还是这么爱开玩笑，我哪儿有你说的那么年轻.\nB: 我说的是真的，你确实比以前更年轻，更漂亮了。\n我女儿确实不错，记得她刚拿到第一个月工资时，就兴奋地拉着我和她爸俩去商场，给我\n们买礼物，那时我和她爸心里别提多美了。",
            "ex_cn": "Phó từ 确实 được dùng để khẳng định tính xác thực của một tình huống khách quan. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "52. 在。。。看来",
            "usage": "在。。。看来 là thành phần được dùng để chỉ ra rằng nội dung kế tiếp là lời phát biểu ý kiến\nhay quan điểm. Ví dụ:\n在很多人看来，听流行音乐仅仅是念经人的爱好，其实现在不少中老年人对流\n行歌曲也很感兴趣。\n在我看来，比赛结果并不是最重要的，在参加比赛的过程中使自己获得提高更\n重要。\nA：你觉得在选择职业死，收入重要吗？B： 在我看来，赚钱多少不是最重要\n的，兴趣才是关键。",
            "ex_cn": "在。。。看来 là thành phần được dùng để chỉ ra rằng nội dung kế tiếp là lời phát biểu ý kiến",
            "ex_py": "hay quan điểm. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "53. 由于",
            "usage": "由于 có thể được dùng làm liên từ để chỉ nguyên nhân, theo sau đó là một câu. 由于 Thường\nđược đặt ở vế đầu của câu. Ví dụ:\n今年春节他们本来打算出国去逛逛，但是由于家里的老人突然生病了，所以他\n们只好放弃了这个计划。\n当你生病了，如果由于缺钱而不能及时去看医生，你的健康都很难得到保证，\n就更别说幸福了。\n由于 cũng có thể được dùng làm giới từ để chỉ nguyên nhân, theo sau đó là cụm danh từ. Ví dụ:\n由于种种原因，我们不得不改变原来的计划。\n由于工作的需要，我去年十月去了趟上海，跟一家公司去谈生意。",
            "ex_cn": "由于 có thể được dùng làm liên từ để chỉ nguyên nhân, theo sau đó là một câu. 由于 Thường",
            "ex_py": "được đặt ở vế đầu của câu. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "54. 比如",
            "usage": "Động từ 比如 dẫn ra các ví dụ dể giải thích sự vật hay tình hướng nào đó. Ví dụ:\n还有人说，小时候幸福是一件东西，比如一块橡皮，一块糖，得到了就很幸福。\n每个人都有自己特别兴趣的东西，比如，作家爱写小说，画家爱画画儿。我们\n只有了解了自己的兴趣爱好后，才能更 好地发展自己。\n旅游前最好做一计划，比如要去几个地方，怎么坐车，带哪些东西，一共要玩\n儿过少天等。把这些都提前想好，旅游时才会更轻松。",
            "ex_cn": "Động từ 比如 dẫn ra các ví dụ dể giải thích sự vật hay tình hướng nào đó. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "55. 连",
            "usage": "Giới từ 连 thường được dùng trong cấu trúc \"连……也／都...\" để nhấn mạnh. Với cấu trúc này,\nngười nói giải thích rõ tình huống khác bằng cách nhấn mạnh một ví dụ có tính cực đoan (ở mức\ntột cùng). Theo sau 连 có thể là chủ ngữ. Ví dụ:\n如果连你自己都不喜欢自己，又怎么能让别人喜欢你呢？\n广告越来越多，几乎无处不在。不只是电视上有广告，公共汽车、地铁上也有\n很多广告，连我住的楼的电梯里都有三个广告。\nTheo sau 连 cũng có thể là tân ngữ (được đặt phía trước). Ví dụ:\n你太厉害了！ 连中文报纸都看得懂。",
            "ex_cn": "Giới từ 连 thường được dùng trong cấu trúc \"连……也／都...\" để nhấn mạnh. Với cấu trúc này,",
            "ex_py": "người nói giải thích rõ tình huống khác bằng cách nhấn mạnh một ví dụ có tính cực đoan (ở mức",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "55. 否则",
            "usage": "Liên từ 否则 có nghĩa là nếu không thì.... Câu theo sau 否则 chỉ kết quả được suy ra từ câu phía\ntrước hoặc đưa ra một lựa chọn khác. Ví dụ:\n他一定有重要的事找你，否则不会打这么多次电话来。\n你最好下午四点前去公司找她，否则就明天早上再去。\n看来要想考好，不但要认真复习，还得注意考试的方法，否则会做的题也没时\n间做了。\n无论\nLiên từ 无论 diễn tả kết quả, kết luận sẽ không thay đổi trong bất kỳ điều kiện nào, thường được\ndùng trong cấu trúc \"无论……都／也……”. Theo sau 无论 có thể là các thành phần thể hiện sự\nlựa chọn hoặc đại từ nghi vấn (phiếm chỉ). Ví dụ:\n无论是普通杂志，还是著名小说，只要打开它们，就会发现，世界上有那么多\n有意思的事情，有那么多不一样的生活。\n无论做什么事都要注意方法，正确的方法可以让我们做得更好。\n这次比赛他已经打出了自己最好的水平，无论结果怎么样，我们都应该为他高\n兴。",
            "ex_cn": "Liên từ 否则 có nghĩa là nếu không thì.... Câu theo sau 否则 chỉ kết quả được suy ra từ câu phía",
            "ex_py": "trước hoặc đưa ra một lựa chọn khác. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "56. 然而",
            "usage": "Liên từ 然而 thường được dùng trong văn viết và được đặt ở đầu vế câu sau (có thể có dấu phẩy)\nđể chỉ sự chuyển ý. Ví dụ:\n他虽然失败了很多次，然而一直没有放弃。\n很多人觉得自己的生活是幸福的，然而每个人对幸福的看法却不完全相同。\n另外，在看完一篇文章或一本书之后，还可以把它的主要内容和自己的想法写\n下来。然而，你不能完全相信书本上的内容，要有自己的看法和判断。",
            "ex_cn": "Liên từ 然而 thường được dùng trong văn viết và được đặt ở đầu vế câu sau (có thể có dấu phẩy)",
            "ex_py": "để chỉ sự chuyển ý. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "57. 同时",
            "usage": "Liên từ 同时 có nghĩa là hơn nữa, thường được dùng kết hợp với 又／也／还”. Ví dụ:\n因为小孩子的想法没有那么复杂，所以他们总是很快乐。同时，小孩子也是最\n诚实的。\n阅读有许多好处，它能丰富你的知识，让你找到解决问题的办法；同时，它还\n会丰富你的情感，使你的生活更精彩。\nDanh từ 同时 chỉ các hành động xảy ra cùng lúc, thường được dùng trong cấu trúc “在……\n（的）同时”. Ví dụ:\n李教授讲的这个故事让人觉得好笑的同时，又让人觉得有些难过。\n在学习汉语的同时，我还了解了中国文化，认识了很多中国朋友。",
            "ex_cn": "Liên từ 同时 có nghĩa là hơn nữa, thường được dùng kết hợp với 又／也／还”. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "58. 并且",
            "usage": "Liên từ 并且 có thể được dùng để nối động từ, tính từ nhằm diễn tả vài hành động được thực\nhiện cùng lúc hoặc một số tính chất tồn tại cùng lúc. 并且 cũng được dùng để nối các câu và diễn\ntả ý hơn nữa. Ví dụ:\n他做事很认真，并且有丰富的经验，让他负责很合适。\n这种植物开的花比普通的花大很多，并且特别漂亮。\n这房子家具全，电视、空调、冰箱都很新，并且价格也便宜，真的很值得考虑。\n好，我再跟同事商量商量，希望能及时发现问题，并且准确地找到解决问题的\n方法。",
            "ex_cn": "Liên từ 并且 có thể được dùng để nối động từ, tính từ nhằm diễn tả vài hành động được thực",
            "ex_py": "tả ý hơn nữa. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "59. 再。。。也。。。",
            "usage": "Cấu trúc 再。。。也。。。 thường được dùng trong câu đưa ra giả thuyết để chỉ sự nhượng bộ.\nmang nghĩa là cho dù，dù thế nào đi nữa; theo sau nó có thể là động từ, tính từ, câu...Ví dụ:\n事情已经发生了，你再后悔也无法改变，别伤心了。\n用盐水来洗新衣服，这样穿得再久、洗的次数再多，衣服也不容易掉颜色。\n如果我们有什么看法或者意见，不管别人再怎么不同意、不支持，也应该说出\n来，让别人知道我们的想法和态度。",
            "ex_cn": "Cấu trúc 再。。。也。。。 thường được dùng trong câu đưa ra giả thuyết để chỉ sự nhượng bộ.",
            "ex_py": "mang nghĩa là cho dù，dù thế nào đi nữa; theo sau nó có thể là động từ, tính từ, câu...Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "6. 对于",
            "usage": "Giới từ 对于 cho biết đối tượng được đề cập đến trong tình huống nào đó hay qua thái độ của\nngười nào đó. Cấu trúc \"对于。。。\" có thể được dùng ở trước hoặc sau chủ ngữ. Ví dụ:\n对于这件事，我跟大家的看法不同。\n对于中国人来说，春节是一年之中最重要的节日，春节的时候人们会举行各种\n各样的迎新年活动。\n那您认为对于老师来说，什么是最难做到的？",
            "ex_cn": "Giới từ 对于 cho biết đối tượng được đề cập đến trong tình huống nào đó hay qua thái độ của",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "61. 名量词重叠 Sự lặp lại danh từ/lượng từ",
            "usage": "Danh từ/lượng từ được lặp lại thường có dạng AA, có nghĩa là \"mỗi\". Cấu trúc này có thể được\ndùng làm chủ ngữ, định ngữ của chủ ngữ và trạng ngữ nhưng không được dùng làm tân ngữ và\nđịnh ngữ của tân ngữ.\n人人都会使用语言，但是怎么用语言把话说好却是一门艺术。\n白先生夭夭都去那家咖啡馆坐一会儿，因为他觉得，工作了一天，只有安静的\n地方才能让他得到放松。\n做好小事是完成大事的第一步，因此，仲件小事都应该被看成是一次学习的机\n会。",
            "ex_cn": "人人都会使用语言，但是怎么用语言把话说好却是一门艺术。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "62. 相反",
            "usage": "Liên từ 相反 được dùng ở đầu hoặc giữa vế câu sau để chỉ sự chuyển ý hoặc diễn tả sự tăng tiến.\nVí dụ:\n如果还是使用以前的办法，不但不能解决任何问题，相反，会使问题变得史复\n杂。\n使用正确的方法，我们做起事未能“事半功倍”． ． ．．．．相反，如果方法不\n对，可能花五倍甚至十倍的时间都不能完成任务，结果变成了“事倍功半”。\nTính từ 相反 diễn tả rằng hai mặt của sự vật đối lập hay mâu thuẫn với nhau, có thể làm vị\nngữ hoặc bổ nghĩa cho danh từ. Khi bổ nghĩa cho danh từ, theo sau nó phải có 的。Ví dụ:\n调查结果和他们想的几乎完全相反，他们不得不改变原未的计划。\n我本来以为任务能顺利完成，没想到事情正好向相反的方向发展。",
            "ex_cn": "Liên từ 相反 được dùng ở đầu hoặc giữa vế câu sau để chỉ sự chuyển ý hoặc diễn tả sự tăng tiến.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "63. 大概",
            "usage": "大概 được dùng làm phó từ để chỉ sự phỏng đoán gần đúng về số lượng, thời gian hoặc chỉ sự\nsuy đoán tình huống, cho biết khả năng xảy ra sự việc nào đó là rất cao. 大概 cũng có thể được\ndùng làm tính từ với nghĩa là không chính xác lắm, chung chung. Ví dụ:\n他 8 岁就开始上台演出，到现在大概唱了 60 多年了，他对这门艺术的喜爱从来\n没有改变过。\n你的这个关于举办传统文化节活动的计划，我想校长大概会同意。\n经过这段时间的学习，他的汉语水平提高了不少， 不但可以听懂一些较短的句\n子，还可以进行简单的交流，现在即使不用翻译也能理解大概的意思了。",
            "ex_cn": "大概 được dùng làm phó từ để chỉ sự phỏng đoán gần đúng về số lượng, thời gian hoặc chỉ sự",
            "ex_py": "dùng làm tính từ với nghĩa là không chính xác lắm, chung chung. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "64. 偶尔",
            "usage": "Phó từ 偶尔 chỉ tình huống xảy ra với tần suất rất thấp. Ví dụ:\n我常常跟着电视学唱京剧，然后一遍一遍地练习，偶尔跟中国人一起唱上几句。\n我们调查的近 7000 名上班族中，有 64% 的人经常加痹， 28%偶尔加班，而每\n次加班时间超过两小时的竟然有 59% 。\n三叶草的叶子一般为三个，但偶尔也会出现四个叶子的，这种四个叶子的叫“四\n叶草”，因为 j 民少见，所以有川、说，找到这种“四叶草”的人会得到幸福。",
            "ex_cn": "Phó từ 偶尔 chỉ tình huống xảy ra với tần suất rất thấp. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "65. 由",
            "usage": "Giới từ 由 cho biết người đảm nhận công việc nào đó. Ví dụ:\n按照规定，这件事情应该由王大夫负责。\n“幽默”这个句最早是由林语堂先生翻译过来的。\n上次的春游活动你们办得非常有趣，大家都玩儿得很开心，这次活动继续由你\n们负责，相信也一定会很成功。",
            "ex_cn": "Giới từ 由 cho biết người đảm nhận công việc nào đó. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "66. 进行",
            "usage": "Động từ 进行 có nghĩa là thực hiện hoạt động hay công việc nào đó. 进行 thường dùng trước\nđộng từ có 2 âm tiết diễn tả hành động mang tính chính thức, nghiêm túc. Thông thường, những\nđộng từ diễn tả hành động tạm thời hoặc liên quan đến cuộc sống hàng ngày không được dùng\nvới 进行. Ví dụ:\n大家请注意，现在休息十五分钟，十点半会议继续进行。\n有人在互联网上专门进行过调查，结果发现每六个中国人中就有一个使用筷子\n的方法是错误的。\n成功的语言学习者，在学习方面往往都是积极主动的，他们会主动与他人进行\n交流，并且请别人帮助他们改错。",
            "ex_cn": "Động từ 进行 có nghĩa là thực hiện hoạt động hay công việc nào đó. 进行 thường dùng trước",
            "ex_py": "động từ có 2 âm tiết diễn tả hành động mang tính chính thức, nghiêm túc. Thông thường, những",
            "ex_vi": "động từ diễn tả hành động tạm thời hoặc liên quan đến cuộc sống hàng ngày không được dùng",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "67. 随着",
            "usage": "Giới từ 随着 chỉ một sự việc là điều kiện để một sự việc khác xảy ra. Theo sau 随着 thường là\nđộng từ hai âm tiết kèm từ bổ nghĩa. Ví dụ:\n随着社会的发展，京剧也在改变，以适应不同年龄观众的需要。\n有些人喜欢为自己的生活做长远的计划。但是，随着年龄的增长，他们会发现\n生活总是在不停地变化，生活往往不会按照我们的计划来进行。\n最早的时候，茶只是被当作一种药，而不是饮料。后未，随着人们对茶的认识\n的加深，慢慢开始把它当作解渴的饮料，这才慢慢有了中国的茶文化。",
            "ex_cn": "Giới từ 随着 chỉ một sự việc là điều kiện để một sự việc khác xảy ra. Theo sau 随着 thường là",
            "ex_py": "động từ hai âm tiết kèm từ bổ nghĩa. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "68. 够",
            "usage": "Động từ 够 có nghĩa là đủ về số lượng. Ví dụ:\n客人来了，中国人一定要把家里最好吃的东西拿出来请客人吃，并且让客人吃\n够、吃饱。\n医生提醒我们，睡觉时间太长并不好，有时甚至会引起头疼，一般睡够八小时\n就可以了。\nPhó từ 够 có nghĩa là mức độ đã đạt đến một tiêu chuẩn nhất định. Cấu trúc \"够 + Tính từ \" được\ndùng trong câu khẳng định, theo sau tính từ thường có 的\n不用拿这些，宾馆都会免费提供的。再说，箱子已经够重的了！\n有的人害怕失败，无法接受失败。这不仅是因为他们不够勇敢， 还因为他们对\n自己要求太高。",
            "ex_cn": "Động từ 够 có nghĩa là đủ về số lượng. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "69. 以",
            "usage": "Giới từ 以 có nghĩa là dựa vào, bằng, lấy và thường được dùng trong cấu trúc \"以 + động từ\". Ví\ndụ:\n经理您放心，我一定以最快的速度完成。\n事情做到“差不多”就觉得满意的人往往不会成功，只有以严格的标准来要求自\n己才会让自己变得更优秀。\nCấu trúc 以 có nghĩa là xem...như..., xem...là... Ví dụ:\n我们应该以那些敢说真话的人为镜子，这样才能及时发现自己的缺点。\nLiên từ 以 chỉ mục đích, có nghĩa là để, nhằm. 以 thường được dùng ở đầu vế câu sau và chủ\nngữ của hai vế câu phải giống nhau. Ví dụ:\n如果是十分重要的朋友，中国人往往会请他们去饭店或餐厅吃饭，以表示对客\n人的尊重和礼貌。",
            "ex_cn": "Giới từ 以 có nghĩa là dựa vào, bằng, lấy và thường được dùng trong cấu trúc \"以 + động từ\". Ví",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "70. 既然",
            "usage": "Liên từ 既然 được dùng ở vế đầu của câu để diễn tả ý vì sự thật đã là như vậy. Vế câu sau\nthường có các từ như 就，也，还... được dùng để kết hợp với 既然 để chỉ kết luận được rút ra\ndựa vào tình huống được đề cập trước đó. Ví dụ:\nA：你既然不愿意打球，为什么还要打？\nB：我是不得不打啊，因为这些天我又胖了好几斤。\nA：真抱歉，明天我得出差，不能参加明天的会议了。\nB：既然这样，就只好安排在下周了。\n既然明天晚上公司会关灯停电，那么我们肯定不用加班了。",
            "ex_cn": "Liên từ 既然 được dùng ở vế đầu của câu để diễn tả ý vì sự thật đã là như vậy. Vế câu sau",
            "ex_py": "dựa vào tình huống được đề cập trước đó. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "71. 于是",
            "usage": "Liên từ 于是 được dùng ở vế câu sau để chỉ sự việc xảy ra ngay sau sự việc được đề cập ở vế câu\ntrước đó. 于是 thường bao hàm quan hệ tiếp nối. Ví dụ:\n听爷爷奶奶说，我妹妹出生那天，正好下了一场大雪，于是我爸妈就给她取名\n叫夏雪。\n他是一位芳名的记者，五年里，他去了亚洲许多国家，尝遍了各地的美食。回\n国后，他用一年的时间整理材料，于是就有了这本关于亚洲美食的书。\n……可是， 它的大量使用也带未了严重的环境污染问题。于是，一些国家规定，\n超市、商场不能为顾客提供免费塑料袋，并且鼓励大家购买可以多次使用的购\n物袋。",
            "ex_cn": "Liên từ 于是 được dùng ở vế câu sau để chỉ sự việc xảy ra ngay sau sự việc được đề cập ở vế câu",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "72. 什么的",
            "usage": "Trợ từ 什么的 được dùng sau sự vật được liệt kê để chỉ còn có những trường hợp khác. 什么的\nthường được sử dụng trong văn nói. Ví dụ:\n既然你不喜欢新闻专业，那就考虑考虑其他专业吧，中文、国际关系什么的，\n我和你爸都不反对。\nA：我们去趟超市吧，明天出去玩儿得买点儿饼干和面包。\nB：好，还有矿泉水、果汁什么的。\n实际上，我们只需注意一下身边的小事就可以。例如，夏天把空调的温度开得\n高一些，出门时记得关空调和电脑，这样可以节约用电；少开车，多骑车或者\n乘坐地铁和公共汽车，这样能降低空气污染；还有养成把垃圾丢进垃圾桶的习\n惯什么的。",
            "ex_cn": "Trợ từ 什么的 được dùng sau sự vật được liệt kê để chỉ còn có những trường hợp khác. 什么的",
            "ex_py": "thường được sử dụng trong văn nói. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "73. 想起来",
            "usage": "Động từ 起来 có thể được dùng sau động từ khác để làm bổ ngữ chỉ phương hướng, hoặc bổ ngữ\nchỉ khả năng, diễn tả hướng của hành động là từ dưới đi lên. Ví dụ:\n你这样躺着看书对眼睛不好，快坐起未！\n需要长时间坐着工作的人，一小时左右一定要站起来活动活动.\nKết cấu 想起来 có nghĩa là nhớ lại người hoặc sự việc nào đó trong quá khứ. Ví dụ:\n我突然想起来得去银行，所以不能陪你去大使馆了。\n我想起来了，这孩子又聪明又可爱，你们教育得真好！",
            "ex_cn": "Động từ 起来 có thể được dùng sau động từ khác để làm bổ ngữ chỉ phương hướng, hoặc bổ ngữ",
            "ex_py": "chỉ khả năng, diễn tả hướng của hành động là từ dưới đi lên. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "74. 弄",
            "usage": "Động từ 弄 có nghĩa là làm, thường được dùng trong văn nói, có thể thay thế một số động từ\nkhác. Ví dụ:\nA：关于那个新闻的材料你准备好了吗？我们开会时要用。 B：都弄（准备）\n好了，马上给您送过去。\nA：一会儿搬沙发的时候要小心点儿，别弄（碰）坏了。B：没问题，我会注意\n看着脚下的。\n每天因为这些小事批坪她，弄（批评）得我俩心情都不好。",
            "ex_cn": "Động từ 弄 có nghĩa là làm, thường được dùng trong văn nói, có thể thay thế một số động từ",
            "ex_py": "khác. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "75. 千万",
            "usage": "Phó từ 千万 có nghĩa là nhất định, nhất thiết phải. Theo sau 千万 thường là cấu trúc phủ định.\nVí dụ:\n不过表扬也是一门艺术，表扬千万不要太多，过多的表扬可能会给孩子带来压\n力。\n我要等她生日那天再送给她这个礼物，你现在千万别告诉她。\n每个人都应该记住这句话： “开车千万别喝酒，喝酒千万别开车。”",
            "ex_cn": "Phó từ 千万 có nghĩa là nhất định, nhất thiết phải. Theo sau 千万 thường là cấu trúc phủ định.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "76. 来",
            "usage": "Động từ 来 được đặt trước một động từ khác để diễn tả ý sắp thực hiện việc gì đó, thường được\nsử dụng trong văn nói. Nếu ta không dùng 来 thì nghĩa của câu vẫn không thay đổi. Ví dụ:\n这个沙发这么大，你们两个肯定抬不动，我来帮你们一起抬。\n小王经验比较丰富，并且做事认真，这次就让他来负责吧。\n有的孩子在得不到自己想要的东西的时候，会通过哭、扔东西或者故意敲打来\n引起父母的注意。",
            "ex_cn": "Động từ 来 được đặt trước một động từ khác để diễn tả ý sắp thực hiện việc gì đó, thường được",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "77. 左右",
            "usage": "Danh từ 左右 chỉ được dùng sau các từ chỉ số lượng để diễn tả ý nhiều hơn, hoặc hơi ít hơn một\nsố lượng nào đó. Ví dụ:\n网上买的那本书估计三天左右就能到，你收到了记得给我打个电话说一声。\n这儿不能停车，前方 500 米左右有个免费停车场，您可以把车停到那儿。\n七岁左右的儿童普遍好动，坐不住，所以老师在教这个年龄段的孩子时，一定\n要想办法引起他们的兴趣。",
            "ex_cn": "Danh từ 左右 chỉ được dùng sau các từ chỉ số lượng để diễn tả ý nhiều hơn, hoặc hơi ít hơn một",
            "ex_py": "số lượng nào đó. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "78. 可",
            "usage": "Phó từ 可 được dùng để nhấn mạnh, 可 cũng có thể được sử dụng trong câu hỏi để làm cho ngữ\nkhí trở nên mạnh hơn. Ví dụ:\n这可是个大问题，我也不太清楚。\n下个星期就要去使馆办签证了，这可怎么办？\n我办了一张那个理发店的会员卡，理发可节约了不少钱。",
            "ex_cn": "Phó từ 可 được dùng để nhấn mạnh, 可 cũng có thể được sử dụng trong câu hỏi để làm cho ngữ",
            "ex_py": "khí trở nên mạnh hơn. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "79. 恐怕",
            "usage": "Động từ 恐怕 có nghĩa là lo lắng. Ví dụ:\n我的工作经验还比较少，那份工作我恐怕完成不了。\n这几个动作我恐怕做得不标准，所以比赛前要多多练习。\nĐộng từ 恐怕 diễn tả ý phỏng đoán và có phần lo lắng. Ví dụ:\n这个会议室的座位恐怕不够，还是换到旁边那个大的吧。\n有些事情如果你一定要找一个正确答案，恐怕会让简单的生活变得复杂。\nPhó từ 恐怕 cũng được dùng để chỉ sự phỏng đoán hay suy đoán với nghĩa là \"có lẽ, có thể\". Ví\ndụ:\n听完我的回答，恐怕你已经知道我的答案了吧。\n京剧演出 7 点就开始了，现在恐怕已经结束了。",
            "ex_cn": "Động từ 恐怕 có nghĩa là lo lắng. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "80. 到底",
            "usage": "Động từ 到底 có nghĩa là đến cùng. Ví dụ:\n今天我一定陪你逛街逛到底，保证让你买到合适的衣服。\n要是你觉得情人节只送巧克力还不够浪漫，那就再带她看《将爱情进行到底》\n这个爱情电影吧。\nPhó từ 到底 được dùng trong câu hỏi hoặc câu có đại từ nghi vấn để diễn tả ý tìm tòi, xem xét\nthêm nữa. 到底 không được dùng trong câu hỏi yêu cầu cho biết có/không (đúng/sai) có từ 吗.\nVí dụ:\n你不是已经买好火车票了吗？你到底怎么打算的呀？\n我给他打了好几次电话了，可是一直没人接，也不知道他到底是怎么回事。\nKhi được dùng trong câu hỏi hoặc câu có đại từ nghi vấn, 到底 chỉ có thể được đặt trước chủ\nngữ nếu chủ ngữ là đại từ nghi vấn.\n到底谁去参加比赛，大家还没决定。\n每个人都希望自己健康，那么到底什么是健康呢？ 不同的人有不同的理解。",
            "ex_cn": "Động từ 到底 có nghĩa là đến cùng. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "81. 拿。。。来说",
            "usage": "Trong cấu trúc trên, 拿 là giới từ, được dùng để đưa ra sự vật hay tình huống được nói rõ. Ví dụ:\n这次招聘很多人符合公司的要求，拿他来说，他不仅专业符合职业要求，而且\n还有工作经验。\n如果一个汉字中有“氵”这个部分，说明这个字的意思很可能和水有关系，拿“河、\n流、洗、汁”这几个字来说，它们都跟水有关。\n所以不要把什么事情都推到“明天”，一切从现在做起。就拿学汉语来说吧，首\n先要注意课前预习，找出第二天要学习的重点...",
            "ex_cn": "Trong cấu trúc trên, 拿 là giới từ, được dùng để đưa ra sự vật hay tình huống được nói rõ. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "82. 敢",
            "usage": "Động từ năng nguyện 敢 được dùng trước các động từ để diễn tả ý tự tin làm việc gì. Ví dụ:\n我们应该把那些敢说真话的人当成“镜子”，这样才能及时发现自己的缺点。\n小时候我总喜欢躺在床上看书，结果眼睛越来越不好，所以从那儿以后我就不\n敢再躺着看书了。\n如果你敢诚实地说出自己对哪方面不了解，并不说明自己比别人差，相反，这\n样做更能得到别人的尊重。",
            "ex_cn": "Động từ năng nguyện 敢 được dùng trước các động từ để diễn tả ý tự tin làm việc gì. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "83. 倒",
            "usage": "Động từ 倒 có nghĩa là đổ/rót thứ gì ra khỏi vật chứa. Ví dụ:\n麻烦你给我倒杯咖啡吧，因死我了。\n你怎么咳嗽得这么厉害？我给你倒杯水吧。\nPhó từ 倒 diễn tả ý trái ngược với dự đoán, hàm chứa ngữ khí trách móc hoặc chỉ sự nhượng bộ.\nĐôi lúc người ta dùng 倒是 thay vì 倒. Ví dụ:\n我以为坐出租车会快些，没想到倒比骑车还慢。（跟意料相反）\n你说得倒是容易，做起未可就难了！ （责怪语气）\n去长城倒是一个好主意，就是太远了。（让步）",
            "ex_cn": "Động từ 倒 có nghĩa là đổ/rót thứ gì ra khỏi vật chứa. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "84. 干",
            "usage": "Động từ 干 (gàn) (làm) diễn tả ý dấn thân vào sự nghiệp, công việc hay hoạt động nào đó. Ví dụ:\n每次你让它干什么，它就像能听懂你的话一样去做。\nA：你这篇报道写得很好，以后要继续努力。\nB：谢谢您，我一定会好好儿干的。\n干工作的时候一定要认真、仔细，要注意到计划上的每一个地方，否则就很容\n易出问题。\nLưu ý: Khi đọc là gān, 干 là tính từ, có nghĩa là khô. 干(儿) (gānr) là danh từ, có nghĩa là thực\nphẩm khô. Ví dụ:\nA：妈，帮我拿条毛巾，外面雨真大啊！\nB： 又忘记带伞了吧？头发都湿了，先把头发擦干，别感冒了。\nA：这牛肉干味道真不错，在哪儿买的？\nB：不是我买的，是我男朋友从老家寄过来的。",
            "ex_cn": "Động từ 干 (gàn) (làm) diễn tả ý dấn thân vào sự nghiệp, công việc hay hoạt động nào đó. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "85. 趟",
            "usage": "Lượng từ 趟 chỉ số lần đi lại. Ví dụ:\n上个月我去了趟北京动物园，那里约有 500 多种动物。\n我要出趟差，你能帮我照顾一下我的小狗吗？\nA：马上就要放暑假了，你有什么安排吗？\nB：我打算先回一趟家，看看我奶奶，然后回学校准备研究生考试。",
            "ex_cn": "Lượng từ 趟 chỉ số lần đi lại. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "86. 为了。。。而。。。",
            "usage": "Trong cấu trúc \"为了... 而...\", vế câu trước chỉ mục đích của hành động hay hoạt động trong vế\ncâu sau. Theo sau 为了 là từ hoặc cụm từ. Ví dụ:\n植物会为了阳光、空气和水而竞争。\n北风与南风为了比谁更有能力而吵了起来。它们决定，谁能把人们身上的大衣\n脱掉，谁就赢了\n自然界中，不少动物和植物为了保护自己而改变身体的颜色或样子，使自己成\n为周围环境的一部分。",
            "ex_cn": "Trong cấu trúc \"为了... 而...\", vế câu trước chỉ mục đích của hành động hay hoạt động trong vế",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "87. 仍然",
            "usage": "Phó từ 仍然 chỉ tình huống như cũ, không có sự thay đổi.\n就算在几公里深的海底也仍然能看到东西。\n人比动物聪明，但动物仍然有很多值得人学习的地方。\n足球决赛时， 如果 90 分钟后仍然是 0 比 0 ，按照规定， 可以进行加时赛来决\n定输赢。",
            "ex_cn": "Phó từ 仍然 chỉ tình huống như cũ, không có sự thay đổi.",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "88. 是否",
            "usage": "Phó từ 是否 có nghĩa là \"hay không\" , thường được dùng trong văn viết. Ví dụ:\n不过她这么小，这本书我不知道她是否能读懂。\n有人认为有“夫妻相”的夫妻家庭生活幸福，实际上，婚姻是否幸福跟这个没有\n关系。\n现在，如果要问人们选择职业时主要考虑的是什么，不少人会以收入多少作为\n标准。当然，也有人主要看自己是否喜欢这份工作。",
            "ex_cn": "Phó từ 是否 có nghĩa là \"hay không\" , thường được dùng trong văn viết. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "89. 受不了",
            "usage": "受不了 có nghĩa là chịu không nổi (sự đau đớn, nỗi đau khổ, áp lực, điều bất hạnh, thái độ, tính\nkhí...), thường được dùng trước danh từ hay cụm danh từ. Ví dụ:\nA：我们再去对面的商店看看吧。\nB：我真的受不了你了，你到底还要逛多久？\n不过天天对着电脑看，眼睛实在受不了。\nA：真受不了这样的老师！一个简单的动作让我们练二三十遍。\nB：他对你们严格些好，这样可以让你们打好基础。",
            "ex_cn": "受不了 có nghĩa là chịu không nổi (sự đau đớn, nỗi đau khổ, áp lực, điều bất hạnh, thái độ, tính",
            "ex_py": "khí...), thường được dùng trước danh từ hay cụm danh từ. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "90. 接着",
            "usage": "Phó từ 接着 có nghĩa là ngay sau đó (về thời gian), chỉ tình huống khác xảy ra ngay sau tình\nhuống được đề cập trước đó.\nVí dụ:\n这本书的内容非常有趣，你看完以后先不要还，我接着看。\n我昨天晚上做了一个特别奇怪的梦，梦到自己正在一座桥上走，走着走着，突\n然开过来一辆车，非常危险，接着又梦见我跳到车上， 跟警察一起抓住了一个\n坏人。\n妻子问：“老公，怎么不见你和老王打网球了呢？”丈夫说： “你愿意和一个赢\n了就得意，输了就不高兴的人打球吗？”“当然不愿意。我明白了，”妻子接着说，\n“老王也不愿意跟这样的人打。”",
            "ex_cn": "Phó từ 接着 có nghĩa là ngay sau đó (về thời gian), chỉ tình huống khác xảy ra ngay sau tình",
            "ex_py": "huống được đề cập trước đó.",
            "ex_vi": "Ví dụ:",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "91. 除此以外",
            "usage": "除此以外 thường được dùng trong văn viết, có nghĩa là ngoài điều này (chỉ nội dung được đề\ncập trước đó) ra. Ví dụ:\n他和弟弟同一天出生，兄弟俩长得很像，但除此以外几乎再找不到其他共同点。\n北方人过年时爱吃饺子，是因为饺子味道鲜美，除此以外，还因为人们忙了一\n年，过年时全家人坐在一起包饺子，是很好的交流机会。\n……打电话、发短信已经成了人们普遍使用的联系方法。除此以外，你还可以\n用它来听音乐、看电影、阅读、玩儿游戏、付款购物等，这大大方便了人们的\n生活。",
            "ex_cn": "除此以外 thường được dùng trong văn viết, có nghĩa là ngoài điều này (chỉ nội dung được đề",
            "ex_py": "cập trước đó) ra. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "92. 把。。。叫作。。。",
            "usage": "Trong cấu trúc \"把。。。叫作。。。\" thành phần đứng sau là tên gọi của thành phần đứng\ntrước. Theo sau 把 thường là danh từ, đại từ hoặc cụm danh từ. Ví dụ:\n现代科学技术的发展让世界变得越来越小，所以现在人们都把地球叫作“地球\n村”。\n黄河是中国第二大河，从中国西部流向东部，全长 5464 公里, 人们把它叫作“母\n亲河”。\n中国人搬了新家后，一般都会邀请亲戚朋友到家里来吃顿饭，热闹一下。人们\n把这个习惯叫作“暖房\"",
            "ex_cn": "Trong cấu trúc \"把。。。叫作。。。\" thành phần đứng sau là tên gọi của thành phần đứng",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "93. 疑问代词活用表示任指 Đại từ nghi vấn phiếm chỉ",
            "usage": "Các đại từ nghi vấn 什么 cái gì, 谁 ai, 哪 nào, 哪儿 đâu, 哪里 đâu, 怎么 thế nào ...là các đại từ\nnghi vấn phiếm chỉ, có thể được dùng để chỉ bất kỳ người nào hoặc bất kỳ vật gì; chẳng hạn 什\n么 chỉ bất kỳ thứ gì, 谁 chỉ bất kỳ ai. Những đại từ này thường kết hợp với 都/也 trong câu. Hãy\nxem các ví dụ sau:\n没关系，不用道歉，谁都有粗心填错的时候。\n昨天我做了一个奇怪的梦，但是早上起来怎么想都想不起来。\n“世界上没有免费的午餐”这句话是说，什么东西都要通过努力才能得到。",
            "ex_cn": "Các đại từ nghi vấn 什么 cái gì, 谁 ai, 哪 nào, 哪儿 đâu, 哪里 đâu, 怎么 thế nào ...là các đại từ",
            "ex_py": "xem các ví dụ sau:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "94. 上",
            "usage": "Động từ 上 được dùng sau động từ khác để làm bổ ngữ chỉ phương hướng hoặc bổ ngữ chỉ khả\nnăng. Trong trường hợp làm bổ ngữ chỉ phương hướng, 上 có nghĩa mở rộng là mục đích của\nhành động/hoạt động đã đạt được. Trong trường hợp làm bổ ngữ chỉ khả năng, 上 diễn tả ý người\nta có đạt được mục đích hay không khi thực hiện hành động/hoạt động nào đó. Ví dụ:\n看来今天吃不上羊肉饺子了。\n现在堵车这么厉害，看来今天坐不上 8 点那趟去上海的飞机了。\n一听到哥哥考上了经济专业的博士，我们全家都特别高兴。",
            "ex_cn": "Động từ 上 được dùng sau động từ khác để làm bổ ngữ chỉ phương hướng hoặc bổ ngữ chỉ khả",
            "ex_py": "ta có đạt được mục đích hay không khi thực hiện hành động/hoạt động nào đó. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "95. 出来",
            "usage": "Động từ 出来 có thể được dùng sau động từ khác để làm bổ ngữ chỉ phương hướng, diễn tả hành\nđộng/hoạt động nào đó làm cho sự vật thay đổi trạng thái từ không tồn tại sang hiện hữu, từ bị\nche khuất sang lộ rõ. Ví dụ:\n有的人心里有什么看法或意见，嘴上就会直接说出来。\n你要的那篇文章我已经翻译出来了，你方便的时候就来取吧。\n刚才我在旁边看到你跳中国舞了，没看出来你跳得这么好！",
            "ex_cn": "Động từ 出来 có thể được dùng sau động từ khác để làm bổ ngữ chỉ phương hướng, diễn tả hành",
            "ex_py": "động/hoạt động nào đó làm cho sự vật thay đổi trạng thái từ không tồn tại sang hiện hữu, từ bị",
            "ex_vi": "che khuất sang lộ rõ. Ví dụ:",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "96. 总的来说",
            "usage": "总的来说 thường được dùng làm thành phần xen kẽ để diễn tả rằng người nào đó đưa ra nhận\nxét dựa trên tổng thể hay các tình huống chủ yếu. Ví dụ:\n广告上说房子交通方便，周围很安静，厨房很大。总的来说，这套房子他很满\n意，于是他就记下了房东的手机号码。\n这个公司的工资虽然不算很高，但是奖全很多，所以总的来说收入还不错。\n很多人问去丽江旅游怎么样，总的来说，丽江景色不错，那里的人也很热情，\n去那里旅游是个不错的选择。",
            "ex_cn": "总的来说 thường được dùng làm thành phần xen kẽ để diễn tả rằng người nào đó đưa ra nhận",
            "ex_py": "xét dựa trên tổng thể hay các tình huống chủ yếu. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "97. 在于",
            "usage": "Động từ 在于 thường được dùng trong văn viết để chỉ bản chất của sự vật, có nghĩa là ở chỗ,\nchính là. Chủ ngữ của 在于 thường là cụm danh từ; ta phải dùng danh từ, động từ hay câu ngắn\nsau 在于 để làm tân ngữ của hành động này. Ví dụ:\n人们常说“生命在于运动”，所以很多人一到周末就会到体育馆打几场球。\n选择职业的关键在于兴趣，当你喜欢做一件事情的时候，你会带着热情去工作，\n就不会感到累，更不会觉得有太大的压力。\n没有人能一生都顺顺利利、没有失败。区别在于有的人能接受失败，找到失败\n的原因并继续努力；而有的人却在失败面前停下了脚步。",
            "ex_cn": "Động từ 在于 thường được dùng trong văn viết để chỉ bản chất của sự vật, có nghĩa là ở chỗ,",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "98. 动词着动词着",
            "usage": "Trong cấu trúc \"Động từ + 着 + động từ được lặp lại + 着\", động từ thường chỉ có một âm tiết.\nNgười ta thường sử dụng một động từ khác sau cấu trúc này để chỉ hành động khác xảy ra khi\nhành động được đề cập phía trước đang tiếp diễn. Ví dụ:\n好，那我就放心了，别 开着开着没油了。\n她讲着讲着自己就先笑了，而大家却不明白她到底为什么笑。\n晚上躺在草地上看星星的感觉非常棒，有时候躺着躺着就安静地睡着了。",
            "ex_cn": "Trong cấu trúc \"Động từ + 着 + động từ được lặp lại + 着\", động từ thường chỉ có một âm tiết.",
            "ex_py": "Người ta thường sử dụng một động từ khác sau cấu trúc này để chỉ hành động khác xảy ra khi",
            "ex_vi": "hành động được đề cập phía trước đang tiếp diễn. Ví dụ:",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "99. 一。。。就。。。",
            "usage": "Cấu trúc \"一 ....就...\" (vừa... thì/đã...) có thể được dùng để chỉ hai sự việc xảy ra nối tiếp nhau.\nChủ ngữ của 2 sự việc này có thể giống hoặc không giống nhau. Ví dụ:\n100 年前，塑料一出现就受到人们的普遍欢迎。\n等女儿一回来我就告诉她这个好消息。\nCấu trúc \"一 ....就...\" còn mang nghĩa là hễ...thì/là...Theo sau là điều kiện, theo sau là tình\nhuống sẽ xảy ra trong điều kiện đó. Chủ ngữ của hai thành phần này có thể giống hoặc khác\nnhau. Ví dụ:\n儿子小时候一说话就脸红，回答老师问题的时候声音也很小，我当时很为他担\n心。\n父母必须让孩子从小就知道，不是所有的东西一哭就能得到。\n妈妈一进房间，他就把手机装了起来。",
            "ex_cn": "Cấu trúc \"一 ....就...\" (vừa... thì/đã...) có thể được dùng để chỉ hai sự việc xảy ra nối tiếp nhau.",
            "ex_py": "Chủ ngữ của 2 sự việc này có thể giống hoặc không giống nhau. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "100. 究竟",
            "usage": "Phó từ 究竟 được dùng trong câu hỏi hay câu có đại từ nghi vấn để chỉ sự truy vấn và làm mạnh\nthêm ngữ khí nghi vấn.\n究竟哪个季节去丽江旅游比较好呢？\n随着科学技术的发展，很多问题已经得到解决。但有些问题我们仍然无法回答，\n例如，生命究竟从哪里来？\n学习时，不仅要知道答案是什么，还要弄清楚答案究竟是怎么得来的，只有这\n样，才能把问题真正弄懂。",
            "ex_cn": "Phó từ 究竟 được dùng trong câu hỏi hay câu có đại từ nghi vấn để chỉ sự truy vấn và làm mạnh",
            "ex_py": "thêm ngữ khí nghi vấn.",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "101. 起来",
            "usage": "Động từ 起来 có thể được dùng sau động từ khác để làm bổ ngữ chỉ phương hướng, diễn tả\nhướng của hành động là từ dưới lên trên. 起来 cũng có thể có nghĩa mở rộng là diễn tả hành\nđộng bắt đầu và tiếp diễn hoặc cho biết người nói đánh giá người/sự vật từ phương diện nào đó.\nVí dụ:\n你先把桌子上的东西拿起来，我擦完之后你再放下来。\n邻居小王最近一定遇到了很多开心的事，你听，他又唱起来了。\n比如你跟上海人对话时，会发现上海话听起来就像外语一样。",
            "ex_cn": "Động từ 起来 có thể được dùng sau động từ khác để làm bổ ngữ chỉ phương hướng, diễn tả",
            "ex_py": "động bắt đầu và tiếp diễn hoặc cho biết người nói đánh giá người/sự vật từ phương diện nào đó.",
            "ex_vi": "Ví dụ:",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "102. 动词+起",
            "usage": "Cấu trúc \"Động từ + 起\" chỉ hành động liên quan đến sự vật nào đó; thường thì động từ này nằm\ntrong số ít động từ có tân ngữ đi kèm như: 说, 谈, 讲, 问, 提, 聊, 回忆...Theo sau cấu trúc trên\nthường là danh từ. Ví dụ:\n说起吃的东西，给我印象最深的是湖南菜。\n聊起那场网球比赛，他们俩就兴奋得停不下来了。\n要是有人问起那件事，你就告诉他你还没接到通知，也不清楚怎么回事。",
            "ex_cn": "Cấu trúc \"Động từ + 起\" chỉ hành động liên quan đến sự vật nào đó; thường thì động từ này nằm",
            "ex_py": "thường là danh từ. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK 4.pdf",
            "page": ""
        },
        {
            "structure": "3. 无论",
            "usage": "Liên từ 无论 diễn tả kết quả, kết luận sẽ không thay đổi trong bất kỳ điều kiện nào, thường được dùng trong cấu trúc \"无论……都／也……”. Theo sau 无论 có thể là các thành phần thể hiện sự lựa chọn hoặc đại từ nghi vấn (phiếm chỉ). Ví dụ:\n无论是普通杂志，还是著名小说，只要打开它们，就会发现，世界上有那么多有意思的事情，有那么多不一样的生活。\n无论做什么事都要注意方法，正确的方法可以让我们做得更好。\n这次比赛他已经打出了自己最好的水平，无论结果怎么样，我们都应该为他高兴。",
            "ex_cn": "Liên từ 无论 diễn tả kết quả, kết luận sẽ không thay đổi trong bất kỳ điều kiện nào, thường được dùng trong cấu trúc \"无论……都／也……”. Theo sau 无论 có thể là các thành phần thể hiện sự lựa chọn hoặc đại từ nghi vấn (phiếm chỉ). Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-4.docx",
            "page": ""
        }
    ],
    "hsk5": [
        {
            "structure": "1. 如何",
            "usage": "● “如何” đại từ, dùng để hỏi phương thức . VD：\no 我们明天举行会议，讨论这个问题该如何解决。\no 评委叫第一对夫妻说说他俩是如何恩爱的。\n● “如何” cũng thường dùng ở cuối câu, dùng để trưng cầu ý kiến hoặc hỏi\nthăm tình hình. VD:\no 我们希望由你来负责接解决这个问题，如何？\no “80 后”们月收入情况如何？",
            "ex_cn": "● “如何” đại từ, dùng để hỏi phương thức . VD：",
            "ex_py": "thăm tình hình. VD:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 靠",
            "usage": "● “靠” , là động từ , thường gặp các cách thức “靠着/在........”（dựa vào, tựa\nvào） để cho người hoặc vật thể chống đỡ trọng lượng của cơ thể .Ví dụ:\no 王老师喜欢靠这桌子讲课。\no ........男人的头靠在女人的肩膀上，睡着了。\n● “靠” cũng có nghĩa là nhờ, dựa vào ; dựa vào ai đó mới đạt được lợi ích. Ví\ndụ:\no “ 在家靠父母，出门靠朋友。”有什么事情我能帮忙的，你们尽管\n开口。\no 没有一个人可以完全不靠别人而生活。\n● “靠” cũng có nghĩa là gần kề, kế liền. Ví dụ:\no 我的座位是 17 号，是靠窗的座位。\no 以后我一定会买一个靠海的房子，这样我每天都能听到大海的声\n音。",
            "ex_cn": "● “靠” , là động từ , thường gặp các cách thức “靠着/在........”（dựa vào, tựa",
            "ex_py": "vào） để cho người hoặc vật thể chống đỡ trọng lượng của cơ thể .Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 居然",
            "usage": "● 居然 (lại có thể, lại) phó từ ; biểu thị không ngờ đến, bất ngờ, ngạc nhiên.\nVí dụ:\no 这么简单的题，你居然也不会做？上课时都干什么去了？\no 没想到居然在这里碰到你！你也去上海？\no ....这个女人为了不影响大夫睡觉，居然放弃这次机会！",
            "ex_cn": "● 居然 (lại có thể, lại) phó từ ; biểu thị không ngờ đến, bất ngờ, ngạc nhiên.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 如何，怎么",
            "usage": "Giống:\nĐều là đại từ, đều là phương thức hỏi thăm, thăm dò ý kiến。\n如：只有知道如何/怎么停止的人,才知道如何/怎么高速前进。\n如何 怎么\nKhác",
            "ex_cn": "如：只有知道如何/怎么停止的人,才知道如何/怎么高速前进。",
            "ex_py": "Khác",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Dùng trong văn viết 1. Dùng trong văn nói",
            "usage": "如：该如何爱护我们的地球？ 如：你今天是怎么来的？",
            "ex_cn": "如：该如何爱护我们的地球？ 如：你今天是怎么来的？",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Có thể dùng trong câu hỏi",
            "usage": "nguyên nhân\n如：今天怎么这么冷？",
            "ex_cn": "如：今天怎么这么冷？",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Có thể dùng ở cuối câu biểu thị",
            "usage": "sự hỏi thăm tình hình, trưng cầu ý\nkiến",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Có thể dùng ở đầu câu để",
            "usage": "biểu thị sự ngạc nhiên ,kinh\nngạc\n如：最近身体如何？ 如：怎么，你不认识我了？\nNgữ pháp HSK 5 Phần 2",
            "ex_cn": "如：最近身体如何？ 如：怎么，你不认识我了？",
            "ex_py": "Ngữ pháp HSK 5 Phần 2",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 以来",
            "usage": "● Danh từ , “....以来” biểu thị 1 khoảng thời gian từ một thời điểm nào đó\ntrong quá khứ đến thời điểm hiện tại. Ví dụ:\no 改革开放以来，中国发生了巨大的变化。\no 因此长年以来，父母很少离开老屋，...\no 一直以来, “80 后” 这个词儿都含有年轻的味道。",
            "ex_cn": "● Danh từ , “....以来” biểu thị 1 khoảng thời gian từ một thời điểm nào đó",
            "ex_py": "trong quá khứ đến thời điểm hiện tại. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 临",
            "usage": "● “临” , là động từ , có nghĩa là dựa sát; kề; kế. Ví dụ:\no 我想买一套不临街的房子，这样不会太吵。\no 临江新修了一条路，晚饭后很多人都去那儿散步。\n● “临” giới từ (gần, ngay gần) , cũng có thể làm giới từ, “临.....（时/前）”\nbiểu thị sắp đến thời gian phát sinh của một vài hành động, hành vi. Ví dụ:\no 这是我临离开北京的时候买的。\no 临走那天，父亲从老家赶来送我们。",
            "ex_cn": "● “临” , là động từ , có nghĩa là dựa sát; kề; kế. Ví dụ:",
            "ex_py": "biểu thị sắp đến thời gian phát sinh của một vài hành động, hành vi. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 立刻",
            "usage": "● ( lập tức, ngay, tức khắc) Phó từ, “立刻 + động từ ” biểu thị sự ngay lập\ntức, nhấn mạnh một hành động nối tiếp hành động phát sinh ngay trước đó.\nVí dụ:\no 上了楼，开门的竟是微笑着的父母，温暖的气息立刻扑面而来。\no 原来父母要我留下串钥匙， 只是为了让我们回来时，能立刻感受\n到家的温暖。\no 那两只羊一见到青草，就立刻去吃草了，哪还有心思打架呢？",
            "ex_cn": "● ( lập tức, ngay, tức khắc) Phó từ, “立刻 + động từ ” biểu thị sự ngay lập",
            "ex_py": "tức, nhấn mạnh một hành động nối tiếp hành động phát sinh ngay trước đó.",
            "ex_vi": "Ví dụ:",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 悄悄 và 偷偷",
            "usage": "Giống: Đều là phó từ , đều có nghĩa là làm việc gì đó mà không để cho người khác\nphát hiện\n如:她悄悄/偷偷地走了出去\n悄悄 偷偷\nKhác Nhấn mạnh âm thanh rất nhỏ Nhấn mạnh hành vi không muốn để\ncho người khác biết\n如: 父亲悄悄把我拉到一边说话 如: 她谁也没告诉,偷偷去旅行了\nNgữ pháp HSK 5 Phần 3",
            "ex_cn": "如:她悄悄/偷偷地走了出去",
            "ex_py": "Khác Nhấn mạnh âm thanh rất nhỏ Nhấn mạnh hành vi không muốn để",
            "ex_vi": "cho người khác biết",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 各自 (từng người, riêng phần mình)",
            "usage": "● đại từ, chỉ bản thân một người hoặc chỉ một trong những phương diện của\nbản thân , thường cùng với đối tượng được nhắc đến làm chủ ngữ, định ngữ\ntrong câu. Ví dụ:\no 中场休息时间到了，比赛双方队员各自回场外休息。\no 刘经理认真看了三家广告公司各自提交的计划。\no 以前陆地上的夜晚，他们在各自的房间， 一家人没有更多的交流",
            "ex_cn": "o 中场休息时间到了，比赛双方队员各自回场外休息。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 勿 chớ, đừng",
            "usage": "● phó từ, biểu thị sự cấm đoán ,không cho phép hoặc can ngăn,khuyên ngăn,\nngôn ngữ viết, giống từ “不要”. Ví dụ:\no 非工作人员，请勿入内。\no 网上购票者须注意网站的安全性，切勿上当受骗。\no 中国有句老话：可上山，勿下海。",
            "ex_cn": "ngôn ngữ viết, giống từ “不要”. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 包括 bao gồm",
            "usage": "● động từ , biểu thị bao hàm các bộ phận . Ví dụ:\no 汉语技能教学包括听、说、读、写四个方面。\no “ 学习”，其实包括“学” 与“ 习” 两层意思。学， 就是学习知识；\n习，就是实践（ Shíjiàn, thực hành）、练习。\n● “包括” còn có thể nhấn mạnh một vài bộ phận, có tác dụng nêu ví dụ, bổ\nsung, giải thích... Ví dụ:\no 然而， 包括翟峰的父母， 所有人都觉得，在峰“ 疯了”\no 我们班所有人，包括最不爱运动的刘方也都参加了这次运动会。",
            "ex_cn": "o 汉语技能教学包括听、说、读、写四个方面。",
            "ex_py": "sung, giải thích... Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. 时刻 thời khắc",
            "usage": "● “时刻” , danh từ, biểu thị ở một vài thời điểm hoặc một đoạn thời gian. Ví\ndụ:\no 在最后时刻，他为本队踢进了赢得比赛的关键一球。\no 美好的时刻过去后是一个个紧张的夜晚。\n● “时刻” cũng có thể làm phó từ , biểu thị ý nghĩa mỗi thời mỗi khắc, thường\nxuyên, ...có thể lặp lại là “时时刻刻”. Ví dụ:\no 我们非常需要你这样的人才，只要你愿意，公司的大门时刻都为\n你开着。\no 工作中，他时时刻刻提醒自己： 乘客的安全是最重要的。",
            "ex_cn": "● “时刻” , danh từ, biểu thị ở một vài thời điểm hoặc một đoạn thời gian. Ví",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "5. Phân biệt 舒适 và 舒服",
            "usage": "Giống:\nĐều là tính từ, biểu thị sự vui vẻ thoải mái .\n如：饭店为入住的客人准备了舒适/舒服的房间。\n舒适 舒服\nKhác",
            "ex_cn": "如：饭店为入住的客人准备了舒适/舒服的房间。",
            "ex_py": "Khác",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Thường dùng trong văn viết 1. Thường dùng trong văn nói",
            "usage": "如：这款车内部空间宽大，乘坐\n舒适。\n如：他靠在沙发上舒舒服服地看电\n视。",
            "ex_cn": "如：这款车内部空间宽大，乘坐",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Thiên về cảm nhận tổng thể",
            "usage": "của con người do môi trường hoàn\ncảnh tác động lên.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Thiên về cảm nhận cụ thể, chủ",
            "usage": "quan về mặt tinh thần và thân thể của\ncon người.\n如： 我们都需要一个轻松舒适的\n生活环境。\n如：听了他的话，我心里很不舒\n服。",
            "ex_cn": "如： 我们都需要一个轻松舒适的",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Có thể trùng điệp kiểu AABB.",
            "usage": "Cũng có thể linh động làm động từ.\nThường thì trùng điệp kiểu ABAB\n如：踢完球了？洗个热水澡舒服舒\n服吧\nNgữ pháp HSK 5 Phần 4",
            "ex_cn": "如：踢完球了？洗个热水澡舒服舒",
            "ex_py": "Ngữ pháp HSK 5 Phần 4",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 至今 (đến nay)",
            "usage": "● là phó từ, thẳng đến thời điểm hiện nay, thường dùng ở đầu vế câu thứ 2\nhoặc đứng trước động từ, cũng có thể kết hợp với một số từ ngữ khác để tạo\nnên kết cấu cố định, ví dụ: “从古至今”（từ xưa đến nay）. Ví dụ:\no 我在北京出生、长大，至今还没离开过呢。\no 至今，很多国家并没有规定什么才是健康食品。\no 流传至今的“百里背米”讲的就是他孝敬父母的故事。",
            "ex_cn": "nên kết cấu cố định, ví dụ: “从古至今”（từ xưa đến nay）. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 顶",
            "usage": "● “顶” là danh từ, chỉ bộ phận cao nhất của con người hoặc vật thể. Ví dụ:\no 请把手举过头顶。\no 父亲的朋友画了张画儿送我， 画上是一座山，山顶有一个人往下\n看，山下有一个人往上看。\n● “顶” còn có thể làm động từ, biểu thị động tác của đầu. Ví dụ:\no 他能用头顶起 20 斤重的东西。\no 院子里有两只羊正在打架，它们头顶着头，角对着角，就像两个\n小孩儿一样，谁也不愿让谁。\n● “顶” làm động từ còn có thể biểu thị đón lấy, chống lại. Ví dụ:\no 天气非常寒冷，子路顶着大雪往前走。\no 您为什么要顶着压力来做这件事呢？\n● “顶” còn có thể dùng làm lượng từ , dùng cho mũ, ô hơi lớn, hoặc đồ vật có\nhình cái ô. Ví dụ:\no 我这顶新帽子怎么样？\no 这项计划将成为儿童健康的一顶保护伞。",
            "ex_cn": "● “顶” là danh từ, chỉ bộ phận cao nhất của con người hoặc vật thể. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. ······得+不行",
            "usage": "● biểu thị trình độ, mức độ, còn có thể dùng“······+得+很/不得了”....\no 他顶着大雪往前走， 扶着米袋的双手冻得不行，就停下来暖暖，\n再继续赶路。\no 这个地方这么热闹，孩子们高兴得不得了！\no 他心里烦得很，自言自语地抱怨：“怎么还有那么远啊！”",
            "ex_cn": "● biểu thị trình độ, mức độ, còn có thể dùng“······+得+很/不得了”....",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. 反而",
            "usage": "● là phó từ, đứng giữa hai câu, biểu thị sự tương phản với dự kiến ban đầu. Ví\ndụ:\no 这样不但不能提高他们的阅读能力，反而有可能降低他们的阅读\n兴趣和热情。\no 大城市的生活虽然很精彩，但一辈子生活在农村的父母反而会不\n适应。\no 但他并没有因为物质条件好而感到欢喜，反而常常诚恳地说：\n“多么希望父母能和我一起过好日子！······”",
            "ex_cn": "o 这样不但不能提高他们的阅读能力，反而有可能降低他们的阅读",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "5. Phân biệt 满足 và 满意",
            "usage": "Giống: Đều là động từ, có ý nghĩa cảm thấy là đã đủ, nguyện vọng đã được thực\nhiện.\n如：我对现在的生活感到非常满足/满意。\nKhác:\n满足 满意",
            "ex_cn": "如：我对现在的生活感到非常满足/满意。",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Nhấn mạnh đã đúng với tâm ý",
            "usage": "của bản thân.\n如：只要能饱饱地吃上一吨米\n饭，也就满足啦。\n如：老师说他对我这次的作业非\n常满意。",
            "ex_cn": "如：只要能饱饱地吃上一吨米",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Có thể dùng làm định ngữ hoặc",
            "usage": "trạng ngữ\n如：她找到了一份满意的工作",
            "ex_cn": "如：她找到了一份满意的工作",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Có thể kết hợp với “希望，要",
            "usage": "求，条件，愿望” 3. Thường không trực tiếp kết hợp\nvới các tân ngữ. 如：这个我不想要，他不能满足\n我们的要求。\nPhần 5",
            "ex_cn": "求，条件，愿望” 3. Thường không trực tiếp kết hợp",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 从而(từ đó)",
            "usage": "● là liên từ, đứng giữa hai câu, câu trước biểu thị nguyên nhân; phương pháp,\ncâu sau biểu thị kết quả; mục đích... Ví dụ:\no 比赛前做好思想准备可以减少运动员的压力，从而取得比赛的成\n功。\no 在学习过程中及时复习， 可以尽早发现和解决问题，加深理解，\n从而取得更好的成绩。\no 而济南的老百姓住在泉边，喝着这甜美的泉水，自然对它充满感\n激之情，从而也产生了许多关于泉水的美丽传说。",
            "ex_cn": "o 比赛前做好思想准备可以减少运动员的压力，从而取得比赛的成",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 于",
            "usage": "● giới từ, tương đương với “在、从、对、向、比”. Ví dụ:\no 这家公司成立于 1997 年。(biểu thị thời gian)\no 这种药主要用于感冒的治疗。(biểu thị phạm vi)\no 济南的泉水，来自于济南市以南的广大山区，……(biểu thị xuất\nxứ)\no 运动有助于健康。(biểu thị đối tượng)\no 李明半年没找到工作了， 没办法，只好求助于当经理的老同学王\n峰了。(biểu thị đối tượng)\no 队员们都认为对方的水平远远高于自己。(biểu thị so sánh)",
            "ex_cn": "● giới từ, tương đương với “在、从、对、向、比”. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 为",
            "usage": "● “为” là động từ , có nghĩa là “成、成为”(thành, trở thành). Ví dụ:\no 而济南市区的地下岩石变为了火成岩, ·····\no 每个人都会遇到各种压力，可是，压力也可以变为动力。\n● “为” cũng biểu thị “作为、算作” (làm, coi như) . Ví dụ:\no 找工作时，很多人会以收入多少为第一标准, 这种想法我不能接\n受。\n●\no 在他看来，没有工作的生活就不能称其为生活。",
            "ex_cn": "● “为” là động từ , có nghĩa là “成、成为”(thành, trở thành). Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. 起来",
            "usage": "● “起来” là động từ , “động từ + 起来” biểu thị từ phân tán đến tập trung\nlại.Ví dụ:\no ·····地下水流到这里，碰到火成岩挡住了路就积蓄起来，越积越\n多。\no 渔夫（ Yúfū, người đánh cá）想， 这网一收起来，鱼一定可以装\n满整条船。\n● “động từ + 起来” biểu thị từ lộ rõ đến ẩn nấp, ẩn náu . Ví dụ:\no 刘丽知道自己做得不对，躲起来不敢见我。\no 为了不被坏人抢走，他把壶埋入地下藏了起来，....",
            "ex_cn": "● “起来” là động từ , “động từ + 起来” biểu thị từ phân tán đến tập trung",
            "ex_py": "lại.Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "5. Phân biệt 美丽 và 优美",
            "usage": "Giống: Đều là tính từ dùng để miêu tả phong cảnh, môi trường...\n如：济南是一座风景美丽/优美的城市\nKhác:\n美丽 优美",
            "ex_cn": "如：济南是一座风景美丽/优美的城市",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Thường dùng để mô tả tướng mạo,",
            "usage": "dáng người, ăn mặc ...đẹp",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Thường thiên về mô tả hành động,",
            "usage": "hình tượng...đem đến cho người\nkhác một cảm giác tốt đẹp.\n如：她有一双美丽的大眼睛。 如：演员们的动作十分优美",
            "ex_cn": "如：她有一双美丽的大眼睛。 如：演员们的动作十分优美",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Còn có thể mô tả phi thị giác",
            "usage": "(nghe)\n如：雨后天空中出现了一道美丽的\n彩虹。\n如：一进院子就听到了丽丽那优\n美的歌声",
            "ex_cn": "如：雨后天空中出现了一道美丽的",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Có cách dùng tu từ, có ý nghĩa tốt",
            "usage": "đẹp, cao quý. 3. Không có cách dùng này\n如：他有一颗美丽善良的心。\nNgữ pháp HSK 5 Phần 6",
            "ex_cn": "如：他有一颗美丽善良的心。",
            "ex_py": "Ngữ pháp HSK 5 Phần 6",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 替",
            "usage": "● “替” là động từ, có nghĩa là “thay thế”\no 见了老公，你替我向他问好。\no 刘老师今天有点儿事来不了，你能替替他吗？\n● “替” có thể làm giới từ, biểu thị “给、为” (cho ai, vì ai)\no 七郎暗暗下定决心一定要杀死“夕”，替百姓除掉这个制造灾害的\n东西。\no 李阳要去留学了，我们都替他高兴。",
            "ex_cn": "● “替” là động từ, có nghĩa là “thay thế”",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 说不定",
            "usage": "● “说不定”, là động từ, có nghĩa là “không thể nói rõ ràng, khẳng định” . Ví\ndụ:\no 这事儿经理已经同意了，只是出发的时间还说不定。\no 咱两到底谁赢谁输还真说不定呢。\n● “说不定” cũng có thể làm phó từ , biểu thị ước tính , có khả năng lớn . Ví\ndụ :\no 周末他起得晚，这会儿说不定还在睡觉呢。\no 别随随便便就说放弃，说不定下次会成功了。",
            "ex_cn": "● “说不定”, là động từ, có nghĩa là “không thể nói rõ ràng, khẳng định” . Ví",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 似的",
            "usage": "● “似的” trợ từ , “像/跟/好像·····似的” biểu thị giống với một số sự vật, tình\nhuống. Thường dùng trong văn viết. Ví dụ:\no 消息一出来，询问情况的电话雪片似的纷纷打来。\no 我不敢相信这是真的，好像做梦似的。\n● Trong cấu trúc “·····得+什么似的”, “什么似的” thay thế cho sắc thái\ntình cảm muốn biểu thị, mang ngữ khí khoa trương. Ví dụ:\no 刘方背着重重的电脑包挤地铁，下班回家类的什么似的。\no “ 夕”吓得什么似的，急忙往外逃。",
            "ex_cn": "● “似的” trợ từ , “像/跟/好像·····似的” biểu thị giống với một số sự vật, tình",
            "ex_py": "huống. Thường dùng trong văn viết. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. 纷纷 (dồn dập, tới tấp, sôi nổi)",
            "usage": "● “纷纷”, tính từ, “động từ/ tính từ +纷纷” mô tả (ngôn luận, những thứ rơi,\nrụng xuống ) nhiều mà hỗn loạn. Ví dụ:\no 秋风刮起，落叶纷纷。\no 他救起了妻子，孩子却被水冲走了。事后，人们议论(Yìlùn bàn\ntán) 纷纷。\n● “纷纷” cũng có thể làm phó từ, đằng sau là động từ, biểu thị (nhiều người\nhoặc sự vật) liên tục tiếp diễn. Ví dụ:\no 除掉“夕”以后，百姓纷纷对七郎表达谢意。\no 要下雨了，路上的人纷纷往家里跑。",
            "ex_cn": "● “纷纷”, tính từ, “động từ/ tính từ +纷纷” mô tả (ngôn luận, những thứ rơi,",
            "ex_py": "rụng xuống ) nhiều mà hỗn loạn. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "5. Phân biệt 打听 và 询问",
            "usage": "Giống: Đều là động từ, đều có ý nghĩa “hỏi”.\n如：他打听/询问了老人的身体和生活情况。\nKhác:\n打听 询问",
            "ex_cn": "如：他打听/询问了老人的身体和生活情况。",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Dùng nhiều trong khẩu ngữ 1.Dùng trong văn viết",
            "usage": "如：我跟您打听一下，附近有邮\n局吗？\n如： 他仔细询问了公司近年来的发\n展情况。",
            "ex_cn": "如：我跟您打听一下，附近有邮",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Thường để tìm kiếm, tìm hiểu",
            "usage": "thông tin liên quan, đằng sau có\nthể kết hợp với bổ ngữ kết quả\n“到”.",
            "ex_cn": "“到”.",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Đằng sau không thể thêm BNKQ",
            "usage": "“到” ngoài ra còn mang nghĩa trưng\ncầu ý kiến.\n如：我到处打听也没打听到这家\n公司。\n如：他打电话询问刘教授对论文的\n意见。",
            "ex_cn": "“到” ngoài ra còn mang nghĩa trưng",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Đằng sau có thể thêm đối tượng của",
            "usage": "hành động, cũng có thể linh hoạt làm\ndanh từ.\n如：警察询问了当天见过他的另\n据。\n他详细地回答了病人的询问。\nNgữ pháp HSK 5 Phần 7",
            "ex_cn": "如：警察询问了当天见过他的另",
            "ex_py": "Ngữ pháp HSK 5 Phần 7",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 瞎",
            "usage": "● “瞎” ，động từ, nghĩa là “mắt không nhìn thấy”. Ví dụ:\no 聪明人用双手挡住了马的双眼，对那个人说：“要是这马真是你\n的，你一定知道马的那只眼睛是瞎的。”\no 一天，他让士兵去买一头大象和一些出生时眼 睛就瞎了的人回来。\n● “瞎” cũng có thể làm phó từ, biểu thị không có lí do, không có căn cứ hoặc\nkhi làm một vài việc không có hiệu quả. Ví dụ:\no 别听他瞎说！不用害怕，我们不会这么倒霉的。\no 他自己的问题，他会想办法的，你就别替他瞎担心的。",
            "ex_cn": "● “瞎” ，động từ, nghĩa là “mắt không nhìn thấy”. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 分别",
            "usage": "● “分别”, động từ , nghĩa là ly biệt, chia tay, xa cách. Ví dụ:\no 分别是暂时的，我们以后一定会再见。\no 从毕业到现在我们已经分别 20 年了，一直都没有联系。\n● “分别” cũng có thể làm phó từ, biểu thị riêng biệt, mỗi. Ví dụ:\no 我分别找两个人打听这件事，他们的说法都是一样的。\no 士兵们分别去不同的地方寻找，把找到大象和盲人带到他面前。\n● “分别” khi làm phó từ, chỉ rõ từng cái một.\no 一张桌子上放着三瓶饮料，分别是茶，可乐和咖啡。\no 谈到对目前工作最不满意的地方，1%的被调查者认为休息时间\n太少，发展慢，工资太低分别占 20.3%和 20%。\n● “分别” còn có thể làm danh từ, nghĩa là phân biệt, bất đồng, khác nhau. Ví\ndụ:\no 我不知道这两种做法有什么分别。\no 这两张照片的分别是一眼就看得出来得。",
            "ex_cn": "● “分别”, động từ , nghĩa là ly biệt, chia tay, xa cách. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 根",
            "usage": "● “根” (rễ, rễ cây) danh từ, chỉ bộ phận của thực vật sinh trưởng dưới lòng đất.\nVí dụ:\no 这棵树的根又粗又长。\no 这种植物的根下雨时会大量吸水，从而满足自身的需要。\n● “根” khi làm danh từ cũng biểu thị nền móng, cơ sở, gốc, chân của sự vật.\nVí dụ:\no 你这颗牙连牙根都坏了，平时难道不疼吗？\no 这件事还是得从根上解决，只理解表面问题是不行的。\n● “根” cũng có thể làm lượng từ, thường dùng cho vật dài và nhỏ. Ví dụ:\no 摸到尾巴的盲人说大相像一根绳子。\no 可是，这次他连续换了几根箭，都没能再射进去······",
            "ex_cn": "● “根” (rễ, rễ cây) danh từ, chỉ bộ phận của thực vật sinh trưởng dưới lòng đất.",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. 便",
            "usage": "● 便 làm phó từ, nghĩa là 就 “thì, là, đã”, thường dùng trong văn viết. Ví dụ:\no 楼上新买了一架钢琴，我们家便多了一些不安静。\no “精诚所至，金石为开”这一成语也便由此流转下来。\no 很多时候，仅仅是换一种心情，换一个角度，便可以从困境中走\n出来。",
            "ex_cn": "● 便 làm phó từ, nghĩa là 就 “thì, là, đã”, thường dùng trong văn viết. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "5. Phân biệt 忽然 và 突然",
            "usage": "Giống: Đều có thể đứng trước động từ, biểu thị là không ngờ đến/ không nghĩ đến,\nxảy ra rất nhanh .\n如：我们正在上课，他忽然/突然站了起来。\nKhác:\n忽然 突然\nLà phó từ, chỉ có thể đứng trước\nđộng từ hoặc đầu của câu sau ( có\nthể thay bằng “突然”)\nLà tính từ, có thể làm vị ngữ, định\nngữ, bổ ngữ trong câu.\n如：一天傍晚，他正带着士兵们\n在山中打猪，忽然发现远处的草\n丛中蹲着一只大老虎。\n如：这件事太突然了！（谓语）\n这件事发生得太突然了！（补\n语）\n这突然的一声喊叫吓了我一跳\n（定语）\nNgữ pháp HSK 5 Phần 8",
            "ex_cn": "如：我们正在上课，他忽然/突然站了起来。",
            "ex_py": "Khác:",
            "ex_vi": "Là phó từ, chỉ có thể đứng trước",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 倒",
            "usage": "● “倒” phó từ, biểu thị tương phản, trái ngược với những tình huống thông\nthường. Ví dụ:\no 在其他粮食不足的情况下，用橡子喂猴子倒是个办法。\no 少年不解地问：“怎么勇敢反倒成为缺点了？”\n● “倒” biểu thị không nghĩ đến . Ví dụ:\no 有这样的人？我倒要认识认识。\no 小刘租的房子虽然很小，不过收拾得倒还干净。\n● “倒” có thể biểu thị sự nhượng bộ, đầu tiên dùng để khẳng định, sau đó nói\ncác phương diện khác. Ví dụ:\no 质量倒是挺好，就是价格太贵了。\no 我倒是很愿意参加这次活动，就是暂时无法确定是否有时间。\n● “倒” còn biểu thị không nhẫn nại, bình tĩnh , dùng để hỏi hoặc hối thúc, thúc\ngiục. Ví dụ:\no 你究竟去还是不去？倒是说句话呀！\no 你倒是说说看，这件事你不负责谁负责？",
            "ex_cn": "● “倒” phó từ, biểu thị tương phản, trái ngược với những tình huống thông",
            "ex_py": "thường. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. ·····来 ······去",
            "usage": "● biểu thị sự lặp đi lặp lại nhiều lần của động tác, hai động từ đứng trước “来”\nvà “去” thường là cùng một từ hoặc là từ gần nghĩa. Ví dụ:\no 小狗追着自己的尾巴，在草地上跑来跑去。\no 猴子们似乎只弄懂了主人前面说的一个“三”， 觉得自己吃了亏，\n一个个立起身子跳来跳去，对着老人大喊大叫地发脾气。\no 他们研究来讨论去，还是没找出原因。",
            "ex_cn": "● biểu thị sự lặp đi lặp lại nhiều lần của động tác, hai động từ đứng trước “来”",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 要不",
            "usage": "● “要不” liên từ, giống với “要不然”, biểu thị nếu không như thế này, thì kết\nquả sẽ như dưới đây. “要不/要不然” thường đặt trước chủ ngữ của phân câu\nthứ 2. Ví dụ:\no 老太太说：“4 块，要不我不卖”\no 还好碰见你了，要不然我今天肯定会迟到了。\n● “要不/要不然”còn có nghĩa là vẫn còn một sự lựa chọn khác . Ví dụ:\no 今天太晚了，要不你明天再走吧。\no 要不这样吧，既然你们觉得少那就改成每早上四颗，晚上三颗，\n这样总够了吧。",
            "ex_cn": "● “要不” liên từ, giống với “要不然”, biểu thị nếu không như thế này, thì kết",
            "ex_py": "thứ 2. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt “彼此” và“互相”",
            "usage": "Giống: Đều có nghĩa là cả hai bên có cùng một hành vi, hành động.\n如：我们彼此/互相都很理解对方\nKhác:\n彼此 互相",
            "ex_cn": "如：我们彼此/互相都很理解对方",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Đại từ, có thể đứng trước",
            "usage": "động từ làm chủ ngữ.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Phó từ, khi đứng trước động",
            "usage": "từ thì đằng trước phải thêm chủ\nngữ\n如：相处久了，彼此既然可以\n从表情，声音和行为举止中了\n解对方的意思。\n如：好朋友应该互相帮助。",
            "ex_cn": "如：相处久了，彼此既然可以",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Không thể làm tân ngữ hoặc",
            "usage": "định ngữ.\n如：我们是最好的朋友，不分\n彼此。(tân ngữ)\n我们彼此的爱好相同。(định\nngữ)",
            "ex_cn": "如：我们是最好的朋友，不分",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Có thể trùng điệp, biểu thị",
            "usage": "cả hai không khác nhau mấy.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Không thể trùng điệp. 如：咱们俩彼此彼此，我画的",
            "usage": "比你好不了多少。\nNgữ pháp HSK 5 Phần 9",
            "ex_cn": "比你好不了多少。",
            "ex_py": "Ngữ pháp HSK 5 Phần 9",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 算",
            "usage": "● “算” động từ , có nghĩa là “认作，当做” ( xem như, coi như). Ví dụ:\no 例如著名的文学家鲁迅，在吃喝这件事上，就算是个地道的行\n家，······\no 这钱就算我借给你的，将来你有了的时候再还我。\n● “算” đằng sau có thể đi với “了” biểu thị “作罢，不再计较” (bỏ đi , không\ntính toán nữa) .Ví dụ:\no 不就是一个空瓶子吗？扔掉算了。\no 算了吧，你跑得再快，也追不上会飞的鸟啊。",
            "ex_cn": "● “算” động từ , có nghĩa là “认作，当做” ( xem như, coi như). Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 作为",
            "usage": "● “作为” động từ, có nghĩa là “看做，认为是·····” (xem là, coi là, cho rằng).\nVí dụ:\no 北海公园离家最近，所以我把那儿作为每晚散步的去处。\no 经理要请我去吃顿饭，说是作为我加班的表扬。\n● “作为” có thể làm giới từ, dùng để chỉ ra, dẫn ra thân phận của một người\nhoặc tính chất của sự vật. Ví dụ:\no 作为大作家、大学问家，鲁迅对吃很讲究，吃的内容在他的日记\n占了很大一部分。\no 西红柿是世界上种植(zhòngzhí: trồng)非常普遍的蔬菜，中国作为\n主要生产国之一也在扩大(kuòdà: mở rộng)它的种植面积。",
            "ex_cn": "● “作为” động từ, có nghĩa là “看做，认为是·····” (xem là, coi là, cho rằng).",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 曾经",
            "usage": "● 曾经 (đã từng) phó từ, biểu thị hành động hoặc tình huống đã từng xảy ra\nhoặc từng phát sinh. Ví dụ:\no 鲁迅曾经说他是将别人喝牛奶、咖啡的时间来学习。\no 孔子曾经带着学生周游各国 14 年，传播他的思想。\no 郁达夫在 1933 年曾经作诗形容他： “醉眼蒙胧上酒楼，彷徨呐喊\n两悠悠”，描写得十分形象。",
            "ex_cn": "● 曾经 (đã từng) phó từ, biểu thị hành động hoặc tình huống đã từng xảy ra",
            "ex_py": "hoặc từng phát sinh. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt “亲自”và“自己”",
            "usage": "Giống: Đều có nghĩa là chỉ bản than\n如：（鲁迅）不但会吃，还会亲自/自己动手做。\nKhác\n亲自 自己",
            "ex_cn": "如：（鲁迅）不但会吃，还会亲自/自己动手做。",
            "ex_py": "Khác",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Đại từ, có thể làm chủ ngữ, tân",
            "usage": "ngữ, định ngữ ....\n如：老人总是亲自喂养他的猴子 如：请大家带好自己的资料。",
            "ex_cn": "如：老人总是亲自喂养他的猴子 如：请大家带好自己的资料。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Thường dùng với những người có",
            "usage": "thân phận, địa vị cao hoặc những\nviệc bình thường không hay làm.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Nhấn mạnh người hoàn thành",
            "usage": "động tác là bản thân chứ không phải\nai khác.\n如：这份礼物是市长亲自为生病的\n小女孩儿做的。\n如：你应该自己努力学习，不能\n总是靠别人。\nNgữ pháp HSK 5 Phần 10",
            "ex_cn": "如：这份礼物是市长亲自为生病的",
            "ex_py": "Ngữ pháp HSK 5 Phần 10",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 毕竟",
            "usage": "● “毕竟” là phó từ, có nghĩa là rốt cuộc, cuối cùng. Ví dụ:\no 最然我们遇到了很多困难，但毕竟完成了任务。\no 不过摄影师毕竟是摄影师，主意还是有的。\n● “毕竟” cũng dùng để chỉ phần quan trọng nhất hoặc chính xác nhất, thường\ndùng cùng câu biểu thị “cho dù thế nào thì kết quả chính là như thế này”. Ví\ndụ:\no 生活中总有无法解决的问题，毕竟不是所有的对错都能讲清楚，\n甚至可能根本就没有真正的对与错。\no 他不高兴是正常的，毕竟没有人能在摔得头破血流的时候，还高\n兴得起来。",
            "ex_cn": "● “毕竟” là phó từ, có nghĩa là rốt cuộc, cuối cùng. Ví dụ:",
            "ex_py": "dùng cùng câu biểu thị “cho dù thế nào thì kết quả chính là như thế này”. Ví",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 逐渐",
            "usage": "● phó từ, chỉ trình độ, số lượng tăng hoặc giảm một chút. Ví dụ:\no 食物越来越少，老人不得不逐渐限制猴子的食量。\no 这项运动首先在亚太地区流行，并逐渐受到世界各地人们的欢迎。\no 经过艰苦的试验，电影拍摄技术逐渐改进、成熟。",
            "ex_cn": "o 食物越来越少，老人不得不逐渐限制猴子的食量。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 或许",
            "usage": "● phó từ, có nghĩa là có lẽ, có khả năng. Ví dụ :\no 虽然以前她不支持你，但或许这次会有变化。\no 或许正是因为这一点一滴的努力，你就会走在别人的前面。\no 留心生活的每一瞬间，并为之争论，适时请求帮助，认真研究，\n或许重大发现就在你的眼前。",
            "ex_cn": "o 虽然以前她不支持你，但或许这次会有变化。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt “显示” và “显得”",
            "usage": "Giống: Đều là động từ, đều có nghĩa là biểu hiện ra, thể hiện ra cho người khác\nthấy. Nhưng bình thường không thể đổi dùng cho nhau.\nKhác:\n显示 显得",
            "ex_cn": "显示 显得",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Chỉ biểu hiện ra một số loại thái",
            "usage": "độ, năng lực hoặc tình huống 1.Chỉ biểu hiện ra một số đặc tính.\n如：相片显示：马奔跑时始终有\n蹄着地。\n如：几年不见，他显得成熟多\n了。",
            "ex_cn": "如：相片显示：马奔跑时始终有",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Thường kết hợp cùng danh từ và",
            "usage": "câu ngắn. 2. Thường kết hợp với tính từ.\n如：这次活动的组织显示出了他\n的才能。\n如：中秋节那天，月亮显得格外\n明亮。\nNgữ pháp HSK 5 Phần 11",
            "ex_cn": "如：这次活动的组织显示出了他",
            "ex_py": "Ngữ pháp HSK 5 Phần 11",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 来/过来",
            "usage": "● “来/过来”, động từ xu hướng, thường gặp cách dùng “động từ +来/过来”\ndùng sau động từ “醒” biểu thị chuyển tiếp từ lúc ngủ đến lúc tỉnh. Ví dụ:\no ·····人逐渐从熟睡过渡到浅睡，直到醒来。\no 早晨醒来，我发现窗外正下着大雪。\n● “过来” dùng ở sau động từ, biểu thị quay về trạng thái lúc ban đầu hoặc\ntrạng thái bình thường. Ví dụ:\no 我被一阵吵闹声突然惊醒，过了半天， 脑子才清醒过来。\no 他救了妻子，没救孩子。有的人说他做得对，因为孩子可以再生\n一个，妻子却不能活过来。\n● “ Động từ +得/不+过来” biểu thị có năng lực ( hoặc không đủ năng lực) để\nlàm một vài việc, thường dùng hình thức phủ định. Ví dụ:\no 天上的星星那么多，谁数得过来呀？\no 最近手头的工作太多了，我都忙不过来了。",
            "ex_cn": "● “来/过来”, động từ xu hướng, thường gặp cách dùng “động từ +来/过来”",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 所",
            "usage": "● “所” trợ từ , đứng trước động từ, dùng để chỉ ra và nói sự vật. Thường đứng\ntrước động từ trong câu chủ vị, làm định ngữ, chủ ngữ... Ví dụ:\no 山水画所表现的是人与自然的关系。\no ·····人们对自然醒与被闹钟铃声叫醒所产生的反应是很不相同的。\n● “有/无+所+ động từ” ,“所” và động từ phía sau tạo thành cụm từ , làm tân\nngữ của “有” và “无”.\no 调查显示，随着年龄的增大，女性的职场幸福感有所提高。\no 我和李阳是无所不谈的好朋友。\n● “所” có thể làm lượng từ, dùng với chỗ ở, nơi ở, cơ cấu... Ví dụ:\no 来自北京一所大学的学生做了关于这个问题的实验。\no 学校附近就有一所幼儿园，你可以把孩子送到那儿去。",
            "ex_cn": "● “所” trợ từ , đứng trước động từ, dùng để chỉ ra và nói sự vật. Thường đứng",
            "ex_py": "trước động từ trong câu chủ vị, làm định ngữ, chủ ngữ... Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 相当",
            "usage": "● “相当” động từ, biểu thị( số lượng, điều kiện, tình huống...) hai phương diện\ntương đương, ngang bằng nhau. Ví dụ:\no ·····这些能力最多为正常状态的 65%，与醉酒者相当。\no 这种鸟一天所食的害虫相当于自己的体重。\n● “相当” cũng có thể làm phó từ, biểu thị trình độ, mức độ tương đối cao.\no 菜的味道好极了，服务也挺周到，我相当满意。\no 如果要问人们选择职业时主要考虑的是什么，有相当一部分人会\n以收入多少作为标准。",
            "ex_cn": "● “相当” động từ, biểu thị( số lượng, điều kiện, tình huống...) hai phương diện",
            "ex_py": "tương đương, ngang bằng nhau. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. 数",
            "usage": "● “数” (shǔ) động từ, biểu thị tra, đếm (số lượng) hoặc nói số lượng của từng\ncái một. Ví dụ:\no 我大概数了一下，车上有 32 个学生。\no 先生，这是找您的钱 58 块 6，您数数。\n● “数······（最）······” hoặc “（最）······的（要/就）数······” biểu thị tính\ntoán hoặc so sánh với nhau（最······）. Ví dụ:\no 我觉得北京最美，最有名气的公园要数颐和园了。\no 要说我们班跑得最快的，那就数李阳了。\n● “数”(shù) số từ, có nghĩa là “几/几个” thường dùng trong văn viết. Ví dụ:\no 这里夏季的雷阵雨一般可持续数小时或者更久的时间。\no 这种状态如果持续数天、数周、数月将导致高血压、失眠和一些\n精神问题等。",
            "ex_cn": "● “数” (shǔ) động từ, biểu thị tra, đếm (số lượng) hoặc nói số lượng của từng",
            "ex_py": "cái một. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "5. Phân biệt 持续 và 继续",
            "usage": "Giống: Đều là động từ, đều có nghĩa là tiếp diễn không ngừng nhưng ngữ nghĩa lại\nkhác nhau nhiều, không thể thay thế.\nKhác:\n持续 继续",
            "ex_cn": "持续 继续",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Biểu thị động tác liên tục không",
            "usage": "ngừng, không bị ngắt quãng ở giữa.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Động tác có thể bị ngắt quãng,",
            "usage": "dừng lại ở giữa\n如：这场雨持续下了两个多小\n时。\n如：对不起！打扰了，你们继续\n学习吧。",
            "ex_cn": "如：这场雨持续下了两个多小",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Có thể đi với bổ ngữ thời lượng. 3. Thường không thể thêm bổ ngữ",
            "usage": "thời lượng. 如：小明发烧持续三天了，家里\n人都很着急。\nNgữ pháp HSK 5 Phần 12",
            "ex_cn": "thời lượng. 如：小明发烧持续三天了，家里",
            "ex_py": "Ngữ pháp HSK 5 Phần 12",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 以及",
            "usage": "● liên từ, dùng để nối cụm từ hoặc từ có quan hệ ngang bằng nhau, liên kết\nthành phần thường có sự phân biệt trước sau hoặc sự phân biệt chủ yếu và\nthứ yếu. Ví dụ:\no 吃饭时不要用筷子敲打碗，盘子以及桌面。\no 学校的领导，教师以及一些学生代表观看了演出。\no ·····由于中国互联网的用户数量以及市场成熟程度等都低于发达\n国家，在产品创新上难有领导地位，······",
            "ex_cn": "o 吃饭时不要用筷子敲打碗，盘子以及桌面。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 程度",
            "usage": "● danh từ, chỉ trình độ, mức độ hoặc cấp độ mà ở một vài phương diện đã đạt\nđược .Ví dụ:\no ·····由于中国互联网的用户数量以及市场成熟程度等都低于发达\n国家，在产品创新上难有领导地位，······\no 问题已经发展到了十分严重的程度。\no 在很大程度上，一个人的未来取决于他所受的教育。",
            "ex_cn": "o ·····由于中国互联网的用户数量以及市场成熟程度等都低于发达",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Phân biệt 发达 và 发展",
            "usage": "Giống Ý nghĩa có liên quan, nhưng thường không thể dùng thay thế cho nhau.\nKhác:\n发达 发展",
            "ex_cn": "发达 发展",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Tính từ 1. Động từ",
            "usage": "如：这个城市的经济不太发达。 如：这个城市正在大力发展经\n济。",
            "ex_cn": "如：这个城市的经济不太发达。 如：这个城市正在大力发展经",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Mô tả trình độ phát triển rất cao 2. Chỉ sự biến hóa, thay đổi của sự",
            "usage": "vật.\n如：由于中国互联网的用户数量以\n及市场成熟程度等都低于发达国 如：中国还是一个发展中国家。\n家，在产品创新上难有领导地位。\nNgữ pháp HSK 5 Phần 13",
            "ex_cn": "如：由于中国互联网的用户数量以",
            "ex_py": "Ngữ pháp HSK 5 Phần 13",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 何况",
            "usage": "● “何况” , liên từ, dùng ngữ khí phản vấn (hỏi ngược lại) biểu thị cao hơn một\nmức hoặc dựa vào sự diễn đạt ở câu trước, làm cho kết luận ở câu sau càng\nrõ ràng hơn. Có ý nghĩa “不用说”( chứ đừng nói). Ví dụ:\no ·····缺少了激烈紧张的气氛，连运动员都不满意，更何况看比赛\n的球迷呢。\no 北京的发展变化太快，我这个土生土长的老北京还常迷路呢，何\n况你一个外地人。\n● “何况” còn có ý nghĩa là bổ sung thêm một loại lí do nào đó. Ví dụ:\no 这辆车外观漂亮，安全性高，又何况价钱就比上次看的那辆贵了\n几千块，，小王有点儿动心了。\no 上海冬天没有暖气，屋子里冷得让人伸不出手，何况李阳还是病\n人，自然是受不了的。",
            "ex_cn": "● “何况” , liên từ, dùng ngữ khí phản vấn (hỏi ngược lại) biểu thị cao hơn một",
            "ex_py": "mức hoặc dựa vào sự diễn đạt ở câu trước, làm cho kết luận ở câu sau càng",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 何必",
            "usage": "● phó từ, dùng ngữ khí phản vấn để biểu thị không cần thiết, không bắt buộc.\nVí dụ:\no 何必这么麻烦呢？把篮筐的底去掉不就行了吗？\no 食堂楼下就有个小超市，何况去学校外边呢？\no 你何必亲自送一趟呢？叫个快递不就行了？",
            "ex_cn": "o 何必这么麻烦呢？把篮筐的底去掉不就行了吗？",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 多亏",
            "usage": "● động từ, do có sự giúp đỡ của người khác hoặc bởi vì một vài nhân tố có lợi,\nmà tránh được rủi ro , không may mắn, hoặc đạt được những lợi ích nào đó.\nVí dụ:\no 多亏了他这句话，人们如梦初醒。\no 赵老师，谢谢您，多亏您给我那瓶药，很管用。\no 今天搬家多亏有你在，你可帮我太忙了。",
            "ex_cn": "o 多亏了他这句话，人们如梦初醒。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 激烈 và 强烈",
            "usage": "Giống: Đều là tính từ có nghĩa là mạnh mẽ, lợi hại.\n如：我不顾父母的激烈/强烈反对，偷偷地报考了表演专业。\nKhác:\n激烈 强烈",
            "ex_cn": "如：我不顾父母的激烈/强烈反对，偷偷地报考了表演专业。",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Thiên về nghĩa là mạnh mẽ có",
            "usage": "lực.\n如：人类最早什么时候用火，一\n直是学者激烈争论的问题。\n如：文章发展以后立刻引起了读\n者的强烈反响。",
            "ex_cn": "如：人类最早什么时候用火，一",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Thường mô tả về ngôn luận, cảm",
            "usage": "xúc, trong trận đấu hoặc đấu tranh...",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Thường mô tả ánh sáng, dòng",
            "usage": "điện, màu sắc, mùi vị hoặc mô tả\ntình cảm, tư tưởng, nguyện vọng của\ncon người.\n如：人在激烈运动时，会出很多\n汗。\n如: 这里夏天尽管阳光的照射很强\n烈，但白天气温很少超过 35°C。\nPhần 14",
            "ex_cn": "如：人在激烈运动时，会出很多",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 所谓",
            "usage": "● “所谓” tính từ, biểu thị thường hay nói, thường dùng để đề ra từ ngữ cần\ngiải thích. Ví dụ:\no 很多时候，烦恼是自己找来的，这就是所谓的“自寻烦恼”。\no 所谓四合，“四”指东、西、南、北四面，“合”就是四面房屋围在\n一起，中间形成一个方形的院子。\n● “所谓”còn chỉ những điều do một vài người nói, thường biểu thị không đồng\ný, không thừa nhận. Ví dụ:\no 他所谓的“新闻“，其实我们早就知道了。\no 现在市场上所谓的“健康食品”其实没有统一的标准。",
            "ex_cn": "● “所谓” tính từ, biểu thị thường hay nói, thường dùng để đề ra từ ngữ cần",
            "ex_py": "giải thích. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 则",
            "usage": "● “则” lượng từ, thường dùng với văn bản ngắn thành đoạn hoặc thành bài. Ví\ndụ:\no 在第七课，我们学习了两则成语故事。\no 今天的报纸上有一则非常重要的新闻。\n● “则” liên từ, thường gặp kết cấu “ A·····，（而）B 则······” biểu thị sự so\nsánh giữa câu trước và câu sau. Ví dụ:\no 猫享受独处的快乐，而狗则是希望和别人分享快乐。\no 有的人家喜欢种草、养花、种竹子，有的人家则喜欢用大盆养金\n鱼。\n● “则” còn biểu thị mối quan hệ nhân quả, thường dùng trong văn viết, bằng\nvới từ “就” trong văn nói.\no 北京的冬天，有风则寒，无风则暖。\no “欲速则不达”，人生不能总是要求“快”，其实“慢”也是一种生活\n的艺术。",
            "ex_cn": "● “则” lượng từ, thường dùng với văn bản ngắn thành đoạn hoặc thành bài. Ví",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 为······所·····",
            "usage": "● kết cấu cố định, thường dùng trong văn viết, ngoài ra “为” biểu thị ý nghĩa là\n“被” ( bị, được). Ví dụ:\no 认识他的人，没有人不为他认真的工作态度所感动。\no 有了科学，大自然就可以更好地为人所用。\no 院子不仅拉近了人与自然的关系，也让家里人在此得到了感情的\n交流，对创造生活情趣起了很大作用，因而最为人们所喜爱。",
            "ex_cn": "● kết cấu cố định, thường dùng trong văn viết, ngoài ra “为” biểu thị ý nghĩa là",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. 起",
            "usage": "● động từ, biểu thị sự liên tiếp, kết hợp và cố định. Ví dụ:\no 拉起手，我们就是好朋友。\no 只要关闭起大门，四合院内便形成一个封闭式的小环境。\no 对公司来说，最重要的是建立起一套行之有效的制度。",
            "ex_cn": "o 拉起手，我们就是好朋友。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "5. Phân biệt 通常 và 常常",
            "usage": "Giống: Đều biểu thị thường phát sinh những hành động, động tác giống nhau, ở\nmột vài câu có thể hoán đổi cho nhau, nhưng khi mang ý nghĩa cường điệu thì lại\nkhông giống nhau.\n如：我通常/常常在学校外面那个超市买东西。\nKhác:\n通常 常常",
            "ex_cn": "如：我通常/常常在学校外面那个超市买东西。",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Nhấn mạnh hành động, động tác",
            "usage": "nhiều lần xuất hiện.\n如：有钱人家的，通常是由好\n几座四合院并列组成的。\n如：他成绩很好，常常受到表\n扬。",
            "ex_cn": "如：有钱人家的，通常是由好",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Tính từ, có thể làm định ngữ 2.Phó từ, không thể làm định ngữ",
            "usage": "hoặc bổ sung cho phân câu.\n如：我们通常的做法都是这样\n的。\n如：他常常去上海出差，对上海\n很熟悉。\nPhần 15",
            "ex_cn": "如：我们通常的做法都是这样",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 过",
            "usage": "● động từ xu hướng, thường dùng với cách thức “ động từ + 得/不+ 过” , làm\nbổ ngữ, biểu thị ý nghĩa là quá, vượt qua, hơn. Ví dụ:\no ·····跟别人谈论起军事来，没有人说得过他，······\no 年轻人记忆力好，这一点我比不过你们。\no 我们的原材料贵，人工费用高产品在价格上肯定竞争不过他们。",
            "ex_cn": "● động từ xu hướng, thường dùng với cách thức “ động từ + 得/不+ 过” , làm",
            "ex_py": "bổ ngữ, biểu thị ý nghĩa là quá, vượt qua, hơn. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 迟早",
            "usage": "● phó từ, đằng sau thường đi cùng động từ, biểu thị một vài động tác hoặc sự\nviệc sớm muộn cũng sẽ xảy ra. Ví dụ:\no 如果让他了当大将，迟早会害了赵国。\no 随着网络技术的发展，这些问题迟早都会得到解决。\no 如果不重视技术研究和产品开发，我们迟早会被别人挤出市场。",
            "ex_cn": "o 如果让他了当大将，迟早会害了赵国。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 再三",
            "usage": "● phó từ, có nghĩa là “hết lần này đến lần khác”, đằng sau thường đi với động\ntừ, có lúc cũng có thể dùng sau động từ không mang theo tân ngữ. Ví dụ:\no 赵括的母亲再三阻止赵王任命儿子为大将。\no 我最近这段时间特别忙，实在没时间参加小王的活动，可他再三\n激情，出于礼貌，我只好答应了。\no 朋友请他做公司的总经理，他考 虑再三，最后还是客气地拒绝了。",
            "ex_cn": "o 赵括的母亲再三阻止赵王任命儿子为大将。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 胜利 và 成功",
            "usage": "Giống: Đều là động từ, đều biểu thị đạt được mục đích đã dự tính trước.\n如：北京胜利/成功地举办了 2008 年夏季奥运会。\nKhác:\n胜利 成功",
            "ex_cn": "如：北京胜利/成功地举办了 2008 年夏季奥运会。",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Biểu thị lúc công việc đạt được mục",
            "usage": "đích đã dự tính trước, thường làm\ntrạng ngữ",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Không chỉ dùng trên phương diện",
            "usage": "công việc, sự nghiệp còn dùng\nđược ở nhiều phương diện khác. Có\nthể làm trạng ngữ hoặc vị ngữ.\n如：经过一年多的努力，我们胜利\n地完成了调查工作。\n如：经过艰苦的努力，实验终于\n成功了。",
            "ex_cn": "如：经过一年多的努力，我们胜利",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Còn có nghĩa là trong trận đấu hoặc",
            "usage": "chiến tranh đánh bại được đối thủ. 2. Không có ý nghĩa là đánh bại đối\nthủ. 如：谁坚持到最后，谁就是这场比\n赛的胜利者。",
            "ex_cn": "thủ. 如：谁坚持到最后，谁就是这场比",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Không có ý nghĩa làm cho người",
            "usage": "khác hài lòng, không thể làm bổ ngữ.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Là tính từ, có nghĩa là làm cho",
            "usage": "người khác hài lòng, có thể làm bổ\nngữ\n如：这部电视剧拍得很成功，在\n全国播出后，受到观众的喜爱。\nPhần 16",
            "ex_cn": "如：这部电视剧拍得很成功，在",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 即",
            "usage": "● “即” động từ, dùng trong văn viết , nghĩa là “就是”. Ví dụ:\no “旦” 是象形字，即太阳从地平线上升起。\no 这些人的体重变化表现出清晰的模式，即周末之后体重升高，在\n工作日体重减轻（周五达到最低点）。\n● “即” còn có thể làm phó từ, có nghĩa là “就”“便” . Ví dụ:\no 不懂即问是他最大的优点，也是他成功的主要原因。\no 在办公司这件事上，两人早都有打算，这次的机会让他俩一拍即\n合。",
            "ex_cn": "● “即” động từ, dùng trong văn viết , nghĩa là “就是”. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 个别",
            "usage": "● “个别” tính từ, có nghĩa là “单个，各个” ( từng cái, mỗi cái). Ví dụ:\no 他经常采取个别谈话的方式了解情况和解决问题。\no 教练针对他的技术特点进行了个别训练，达到了比较好的效果。\n● “个别” còn biểu thị cực kỳ ít, hiếm có. Ví dụ:\no ·····除了个别人以外，多数人体重的增加会从周六开始······\no 天气预报说今晚有小到中雨，个别地区可能有大雨。",
            "ex_cn": "● “个别” tính từ, có nghĩa là “单个，各个” ( từng cái, mỗi cái). Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 非",
            "usage": "● “非” là tiền tố, đứng trước cụm danh từ, biểu thị là không thuộc về phạm vi\nnày. Ví dụ:\no 在非语言的交流中，眼睛起着重要的作用。\no 我们公司的技术部门都是专业人员，工资高；非专业人员做服务\n工作，工资不高。\n● “非” có thể làm động từ, có nghĩa là “不是” .Ví dụ:\no ·····工作日和周末体重的临时变化应该被视为正常现象，而非真\n正的体重增加，······\no 成功有时候并非想象中那么难。\n● “非” khi làm phó từ còn biểu thị chủ quan cố ý , kiên trì, khăng khăng làm\nmột việc gì đó. Có lúc cũng có thể dùng để phản vấn, biểu thị phụ định\nkhông cần thiết phải làm như thế này. “非” Cũng có thể kết hợp với động từ,\nhình thành cấu trúc thường dùng như “非+ động từ + 不可” , có nghĩa là “必\n须” (bắt buộc) . Ví dụ:\no 他非要离婚，我们谁拦也拦不住。\no 我本不想提这件事，你又何必非要我说出来呢？\no 有些家长已经习惯了这种竞争，非让自家的孩子考第一名不可。\no 补办学生证的事非你本人去不可。",
            "ex_cn": "● “非” là tiền tố, đứng trước cụm danh từ, biểu thị là không thuộc về phạm vi",
            "ex_py": "này. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 临时 và 暂时",
            "usage": "Giống: Đều có nghĩa là trong một khoảng thời gian ngắn.\n如：没找到满意的房子前，我临时/暂时借住在朋友家里。\nKhác:\n临时 暂时",
            "ex_cn": "如：没找到满意的房子前，我临时/暂时借住在朋友家里。",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Biểu thị một khoảng thời gian",
            "usage": "gần đây không chính xác\n如：这套房子我很喜欢，暂时还\n不打算买掉。",
            "ex_cn": "如：这套房子我很喜欢，暂时还",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Còn có thể làm từ chỉ thuộc tính,",
            "usage": "biểu thị thời gian ngắn, không chính\nthức 3. Không có cách dùng này.\n如：麻烦你春节后帮刘方的女儿找\n份临时工作。\nPhần 17",
            "ex_cn": "如：麻烦你春节后帮刘方的女儿找",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 以",
            "usage": "● “以” là giới từ, thường dùng trong văn viết, có nghĩa là “用、拿、凭借”\n( dùng, lấy, dựa vào, nhờ vào). Ví dụ:\no 同年四月，（微信）以英文名 WeChat 正式进入国际市场。\no ·····学生分为甲乙两队，以足球为比赛工具向蓝内投，按得分多\n少觉输赢。\n● “以” còn có thể làm liên từ, thường dùng trong văn viết, biểu thị mục đích.\nVí dụ:\no 虽然我们已经老了，但还要坚持学习，以适应社会的发展。\no 比如说为了一场戏剧演出，我们会投入很多时间，准备服装、化\n妆、道具、舞台美术，以创造良好的效果。",
            "ex_cn": "● “以” là giới từ, thường dùng trong văn viết, có nghĩa là “用、拿、凭借”",
            "ex_py": "( dùng, lấy, dựa vào, nhờ vào). Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 平常",
            "usage": "● “平常” tính từ, biểu thị phổ thông, bình thường, không có gì đặc biệt. Ví dụ:\no 对小王来说，今天是一个不平常的日子，因 为他今天第一天上班。\no 一部电影，开始虽然剧情平平常常，如果最后半个小时能使我们\n感动，我们依然会向别人推荐它。\n● “平常” cũng có thể làm danh từ, ý nghĩa là “平时” (ngày thường, bình\nthường, lúc thường). Ví dụ:\no 他平常总是来得很早，今天却迟到了。\no 校长又告诉老师们，对待这些孩子，要像平常一样，不要让孩子\n或家长知道他们是被选出来的。",
            "ex_cn": "● “平常” tính từ, biểu thị phổ thông, bình thường, không có gì đặc biệt. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 宁可",
            "usage": "● phó từ, biểu thị sau khi so sánh, chọn lựa được 1 bên tương đối có lợi\no 作为母亲，她宁可自己累一点儿，也不想委屈了孩子。\no 为什么大家宁可挤成一团，也不去没人的那边？\no ·····做节目时，与开模式相比，我们宁可把更多的精力集中在闭\n模式上，······",
            "ex_cn": "o 作为母亲，她宁可自己累一点儿，也不想委屈了孩子。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 忽视 và 轻视",
            "usage": "Giống: Đều biểu thị không chú ý, không chú trọng, trong một vài câu có thể hoán\nđổi cách dùng cho nhau, nhưng ý nghĩa muốn nhấn mạnh lại không giống nhau. Ví\ndụ:\n如：他只注重理论，忽视/轻视实践 (Shíjiàn, thực tiễn)，所以失败了。\nKhác:\n忽视 轻视",
            "ex_cn": "如：他只注重理论，忽视/轻视实践 (Shíjiàn, thực tiễn)，所以失败了。",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Nhấn mạnh xem thường, coi",
            "usage": "thường ai dó.\n如：他忙得忽视了去医院看病。 如：你可别轻视他，他看起来很平\n常，其实很能干。",
            "ex_cn": "如：他忙得忽视了去医院看病。 如：你可别轻视他，他看起来很平",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Về mặt thái độ có khả năng là vô",
            "usage": "ý, vô tình; cũng có khả năng là cố ý,",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Về mặt thái độ thông thường là cố",
            "usage": "ý hoặc mang tính lựa chọn.\ncố tình. Ví dụ:\n如：我们常常忽视结束退场时的\n准备，演出开始时人们认为很有\n魅力，但是糟糕的结局会给人留\n下难以忘记的坏印象。\n如：虽然这是一次小考，他也不能\n轻视要好好复习。\nPhần 18",
            "ex_cn": "如：我们常常忽视结束退场时的",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 极其",
            "usage": "● (cực kì) phó từ, có nghĩa là “非常”, thường dùng trong văn viết, chỉ có thể\nbổ sung cho tính từ song âm tiết hoặc đa âm tiết. Ví dụ:\no 在中国，餐桌上放一把刀是极其少见的现象。\no 每天说“太糟糕了” “太讨厌了” “真倒霉”的人，遇到的困难也格外\n多，运气也显得极其糟糕。\no 抽象派画家的作品中经常见到好像随便洒上颜料而形成的画作，\n在有人看来极其神秘甚至丑陋，······",
            "ex_cn": "● (cực kì) phó từ, có nghĩa là “非常”, thường dùng trong văn viết, chỉ có thể",
            "ex_py": "bổ sung cho tính từ song âm tiết hoặc đa âm tiết. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 其余",
            "usage": "● đại từ, biểu thị phần còn lại, bộ phận khác. Ví dụ:\no 怎么只有你们两个人？其余的同学呢？\no 只有一个房间亮着灯，其余窗户都是黑的。\no 其中三分之一的画作作者没有签名，而其余的则标明了身份。",
            "ex_cn": "o 怎么只有你们两个人？其余的同学呢？",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 可见",
            "usage": "● liên từ, thường dùng cách thức “······，（由此）可见······”, biểu thị có thể\ndựa vào tình huống được nói đến trong văn bản mà đưa ra phán đoán, đánh\ngiá. Ví dụ:\no 他已经住院好几天了，一直诊断不出是什么问题，可见情况不太\n好。\no 汉语中有个成语叫“自知之明”，把“自知”称为“明”，可见“自知”\n是一种智慧。\no 由此可见，志愿者能够从画作中感知艺术家的用心，哪怕他们不\n能够解释原因。",
            "ex_cn": "● liên từ, thường dùng cách thức “······，（由此）可见······”, biểu thị có thể",
            "ex_py": "dựa vào tình huống được nói đến trong văn bản mà đưa ra phán đoán, đánh",
            "ex_vi": "giá. Ví dụ:",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 目前 và 现在",
            "usage": "Giống: Đều là danh từ chỉ thời gian, chỉ thời điểm nói này , thường có thể dùng\nthay thế cho nhau. Ví dụ:\n如: 至少目前/现在可以这么说，没有证据表明黑猩猩或儿童可以这样做。\nKhác:\n目前 现在",
            "ex_cn": "如: 至少目前/现在可以这么说，没有证据表明黑猩猩或儿童可以这样做。",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Thường thiên về chỉ một khoảng",
            "usage": "thời gian nào đó từ lúc trước cho đến\nhiện tại. Ví dụ:",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Có thể thiên về chỉ một khoảng",
            "usage": "thời gian nào đó, cũng có thể chỉ\nthời điểm nào đó, còn có thể nhấn\nmạnh sự so sánh với quá khứ.\n如：到目前为止，事情还没有变\n化。 如：我现在就去。",
            "ex_cn": "如：到目前为止，事情还没有变",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Có thể dùng kết hợp với từ chỉ",
            "usage": "thời gian cụ thể. Ví dụ:\n如：现在是北京时间上午十点\n钟。\nPhần 19",
            "ex_cn": "如：现在是北京时间上午十点",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 般",
            "usage": "● “般” trợ từ, có nghĩa là “一样” “似的”(tựa như) , thường đứng sau danh từ,\ntạo thành một cụm từ làm định ngữ hoặc trạng ngữ. Ví dụ:\no ·····紫的像山泉般清淡可口。\no 说起那段往事，她的脸上露出阳光般的笑容。\no 望着爸爸远去的背景，我的眼泪雨点般不停地往下掉。",
            "ex_cn": "● “般” trợ từ, có nghĩa là “一样” “似的”(tựa như) , thường đứng sau danh từ,",
            "ex_py": "tạo thành một cụm từ làm định ngữ hoặc trạng ngữ. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 闻",
            "usage": "● “闻” khi làm ngữ tố, có nghĩa là “nghe thấy hoặc tin tức, sự việc được nghe\nthấy ”.Ví dụ:\no 你们到各地去旅游，一定会增加对中国的了解，老话说：百闻不\n如一见。\no 时隔多年再来这里，所到之处、所见所闻，无不给人一种新鲜感。\no 邻居们闻声赶来，纷纷跳入水中救起了落水的小孩。\no 假期里，她唱带孩子们到世界各地旅行，增长他们的见闻。\n● “闻” khi dùng làm động từ, biểu thị dùng mũi để cảm nhận, nhận biết mùi vị.\nVí dụ:\no 火最好用文火，等能闻到香味时，便可开锅了。\no 他把壶盖儿打开，闻了闻，原来是酒。",
            "ex_cn": "● “闻” khi làm ngữ tố, có nghĩa là “nghe thấy hoặc tin tức, sự việc được nghe",
            "ex_py": "thấy ”.Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 趁",
            "usage": "“趁” giới từ, có nghĩa là lợi dụng (thời gian, cơ hội) , đằng sau có thể là cụm động\ntừ, danh từ, tính từ và câu đơn. Ví dụ:\n趁着这几天休息，我们去看看房子吧。\n趁电影还没开始，我去买两瓶矿泉水。\n萝卜饼要趁热吃，喜欢口味重的，还可以加少许酱油和醋。",
            "ex_cn": "“趁” giới từ, có nghĩa là lợi dụng (thời gian, cơ hội) , đằng sau có thể là cụm động",
            "ex_py": "từ, danh từ, tính từ và câu đơn. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 怀念 và 想念",
            "usage": "Giống nhau: Đều là động từ, đều có ý nghĩa biểu thị nhớ nhung, không thể quên\nđối với người hoặc hoàn cảnh nào đó.\n如：每当回忆起小学时代的学习生活，我最想念/怀念的人是刘老师。\nKhác nhau:\n怀念 想念",
            "ex_cn": "如：每当回忆起小学时代的学习生活，我最想念/怀念的人是刘老师。",
            "ex_py": "Khác nhau:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Thường dùng trong văn viết, về",
            "usage": "ngữ nghĩa nhấn mạnh thường xuyên\nnhớ đến, không thể quên đi.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Thường dùng trong khẩu ngữ, về",
            "usage": "mặt ngữ nghĩa nhấn mạnh hy vọng\nđược gặp người nào đó .\n如：刘教授非常怀念年轻时在国外\n留学的那段生活。\n如：女儿告诉我，她很想念出差\n的爸爸。",
            "ex_cn": "如：刘教授非常怀念年轻时在国外",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Thường dùng với những người đã",
            "usage": "khuất hoặc những hoàn cảnh không\nthể nào gặp lại được.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Thường dùng với những người",
            "usage": "đang sống hoặc những hoàn cảnh\ncòn có thể được lặp lại.\n如：从文章中我们读到了先生对去\n世的母亲的怀念。\n如：每到春节，我就格外想念家\n乡的一草一木。\nPhần 20",
            "ex_cn": "如：从文章中我们读到了先生对去",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 动词+得/不+起",
            "usage": "● Biểu thị về mặt chủ quan có (không có) năng lực và điều kiện thực hiện\n(hoặc tiếp nhận) động tác nào đó. Ví dụ:\no ·····这对于那些想看又买不起(không mua nổi)书的人来说，只用\n很少的钱就能看一本，毫无疑问是件大好事。\no 古时候，有个十分好学的年轻人，但他家里很穷，买不起灯，一\n到晚上就不能读书。\no 只有经得起困难和时间考验的朋友才算是真正的朋友。",
            "ex_cn": "o ·····这对于那些想看又买不起(không mua nổi)书的人来说，只用",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 支",
            "usage": "● “支” (chống) động từ, biểu thị dùng đồ vật chống cho vật thể không bị đổ\nxuống. Ví dụ:\no 他的两只手放在桌上，支着脑袋，正在想事情。\no ·····我家附近就有个小人书摊，就是一进街口靠墙的一个小棚子，\n里面用几块砖头支着粗糙的木头板子供人们做着看书。\n● “支” ,(cây/đội/bản) có thể làm lượng từ, dùng trong tác phẩm âm nhạc, đội\nngũ, hoặc đồ vật có hình cán. Ví dụ\no 他弹第二支曲子时引起了牛的注意。\no 给他十支枪，他就能拉起一支军队来。",
            "ex_cn": "● “支” (chống) động từ, biểu thị dùng đồ vật chống cho vật thể không bị đổ",
            "ex_py": "xuống. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 凭",
            "usage": "● “凭” Động từ, có nghĩa là nhờ vào, dựa vào. Ví dụ:\no 干工作不能光凭经验，还要有创新。\no 印象中似乎没有什么押金，全凭信用。\n● “凭” Còn có thể làm giới từ, thường dùng cách thức:“ 凭+ tân ngữ + động\ntừ”, biểu thị căn cứ, dựa vào. Ví dụ:\no 请旅客们准备好车票，凭票进站。\no 你凭什么怀疑我偷了东西?",
            "ex_cn": "● “凭” Động từ, có nghĩa là nhờ vào, dựa vào. Ví dụ:",
            "ex_py": "từ”, biểu thị căn cứ, dựa vào. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Có thể làm động từ, chỉ đem lời nói",
            "usage": "nghe thấy hoặc việc xảy ra ghi chép\nlại.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Danh từ, chỉ thành tích tốt nhất",
            "usage": "trong khoảng thời gian nhất định,\ntrong phạm vi nhất định.\n如：我已经把这次会议的内容详细\n地记录下来了。\n如：他在本次比赛中打破了世界\n纪录。",
            "ex_cn": "如：我已经把这次会议的内容详细",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Cũng có thể làm danh từ, chỉ tài liệu",
            "usage": "được ghi chép lại hoặc người ghi chép.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Danh từ, cũng có thể chỉ việc ghi",
            "usage": "lại những sự kiện có giá trị tin tức.\n如：第二天还书时再把记录一个一\n个地画掉。\n小刘，你来做这次会议的记录。\n如：学校带孩子们看了一部有教\n育意义的纪录片。\nNgữ pháp HSK 5 Phần 21",
            "ex_cn": "如：第二天还书时再把记录一个一",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 硬",
            "usage": "● “硬” Phó từ, biểu thị kiên quyết hoặc cố chấp làm một việc gì đó. Ví dụ:\n● 在中国历史故事“指鹿为马”中，赵高把鹿硬说成马。\n● ·····但是他感觉汉子很复杂，汉字的一笔一画没有任何逻辑只能死记硬\n背。\n● “硬” Khi làm phó từ còn biểu thị không đủ năng lực nhưng vẫn tiếp tục tận\nlực để làm một việc gì đó. Ví dụ:\n● 你不知道这一年我是怎么硬挺过来的。\n● 虽然中药汤有点儿苦，但为了治病，他还是硬把它喝下去了。",
            "ex_cn": "● “硬” Phó từ, biểu thị kiên quyết hoặc cố chấp làm một việc gì đó. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 偶然",
            "usage": "● “偶然” (ngẫu nhiên/ bất ngờ) tính từ, biểu thị sự việc phát sinh ngoài dự\nđoán hoặc dựa vào quy luật thông thường thì không có khả năng phát sinh.\nVí dụ:\n● 一个偶然的机会，他发现如果了解汉字的来源和演变过程，再学习它\n就变得轻松、容易。\n● 虽然桂花偶然也能长成 18 米高的大树，但是绝大多数情况下它们都很\n矮。\n● “偶然” cũng có thể làm phó từ, có nghĩa là “偶尔，有时候”(thỉnh thoảng/\ncó lúc). Ví dụ:\n● 她专心地织着毛衣，偶然也会抬眼看一下墙上的挂钟。\n● 那些我生活过的地方，偶然也会在我梦中出现，但都不是我的“家”！",
            "ex_cn": "● “偶然” (ngẫu nhiên/ bất ngờ) tính từ, biểu thị sự việc phát sinh ngoài dự",
            "ex_py": "đoán hoặc dựa vào quy luật thông thường thì không có khả năng phát sinh.",
            "ex_vi": "Ví dụ:",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 尽快",
            "usage": "“尽快” Phó từ, có nghĩa là nhanh hết mức có thể. Ví dụ:\n● ·····我要抓紧时间尽快把《说文解字》电脑化。\n● 新产品出了点儿问题，你和严经理尽快商量一下这事。\n● 趁这两天天气好，您尽快把过季的衣服洗一洗，收起来。",
            "ex_cn": "“尽快” Phó từ, có nghĩa là nhanh hết mức có thể. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 偶然 và 偶尔",
            "usage": "Giống nhau: Đều có thể là phó từ, đều có nghĩa là không thường xuyên, có lúc có\nthể dùng thay thế cho nhau, nhưng ý nghĩa có chút không giống.\n如：在校园里，我偶然/偶尔也会碰到李艳。\nKhác nhau:\n偶然 偶尔",
            "ex_cn": "如：在校园里，我偶然/偶尔也会碰到李艳。",
            "ex_py": "Khác nhau:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Thiên về biểu thị có chút đột ngột,",
            "usage": "không nghĩ đến, trái ngược với 必然.",
            "ex_cn": "không nghĩ đến, trái ngược với 必然.",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Thiên về nhấn mạnh số lần ít, trái",
            "usage": "ngược với 经常\n如：这本书是她一次逛书市时偶然\n发现的。\n如：我平时加班不多，月底偶尔\n有一两天。",
            "ex_cn": "ngược với 经常",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Còn có thể biểu thị sự việc phát",
            "usage": "sinh ngoài ý muốn hoặc không thể\nxảy ra theo quy luật thông thường.\nCó thể làm định ngữ, vị ngữ, đằng\ntrước có thể kết hợp với phó từ chỉ\nmức độ.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Còn có thể là từ thuộc tính, chỉ",
            "usage": "làm định ngữ, đằng trước không thể\nthêm phó từ chỉ mức độ, cũng\nkhông thể làm vị ngữ. Cách dùng\nnày không thường được sử dụng.\n如：李阳的父亲是一位画家，所\n以，李阳喜欢画画儿并非偶然。\n如：他在农村的生活很单调，偶\n尔的聚会还是在村里的老房子里\n举行，很无聊。\nNgữ pháp HSK 5 Phần 22",
            "ex_cn": "如：李阳的父亲是一位画家，所",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 一旦",
            "usage": "● phó từ, biểu thị thời gian không xác định, ngày đó bỗng nhiên tới hoặc giả\ndụ có ngày đó. Ví dụ:\no 长大后，我终于明白了这个道理：女人一旦做了母亲，就变得矛\n盾了。\no 灰姑娘一旦进了这个王宫，······应该怎样对待她的继母，应该怎\n样对待她的两个姐姐。\no 所谓私人空间，是指我们身体周围的一定的空间，一旦有人闯入\n这个空间，我们就会感觉不舒服、不自在。",
            "ex_cn": "o 长大后，我终于明白了这个道理：女人一旦做了母亲，就变得矛",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 难免",
            "usage": "● tính từ, có nghĩa là khó tránh khỏi, không thể tránh khỏi. Ví dụ:\no 刚开始工作，这样的错误是难免的。\no 朋友间难免会发生矛盾、误会甚至是伤害。\no ·····作为一个母亲，在自己的亲生女儿和不是亲生的灰姑娘之间，\n难免会更疼爱自己亲生的女儿，很难完全平等地对待她们。",
            "ex_cn": "o 刚开始工作，这样的错误是难免的。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 自从",
            "usage": "● giới từ, biểu thị bắt đầu từ mốc thời gian nào đó trong quá khứ. Ví dụ:\no 自从城市出现后，它就成为人类生活的中心。\no 自从有了长大后成为作家这个理想之后，他每天都坚持写作。\no 自从我听了这件事，就开始思考应该如何阅读，除了阅读还应该\n做什么。",
            "ex_cn": "o 自从城市出现后，它就成为人类生活的中心。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 平等 và 公平",
            "usage": "Giống: Đều là tính từ, ý nghĩa tương tự nhau, có lúc có thể thay thế nhau.\n如：作为一个母亲，在自己的亲生女儿和不是亲生的灰姑娘之间，难免会更\n疼爱自己亲生的女儿，很难完全平等/公平地对待她们。\nKhác:\n平等 公平",
            "ex_cn": "如：作为一个母亲，在自己的亲生女儿和不是亲生的灰姑娘之间，难免会更",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Nhấn mạnh quyền lợi hoặc sự đãi",
            "usage": "ngộ giống nhau giữa người với người\ntrong xã hội.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Nhấn mạnh xử lí vấn đề hợp tình",
            "usage": "hợp lí , không thiên về một bên.\n如：法律面前人人平等。 如：我们应当公平竞争。",
            "ex_cn": "如：法律面前人人平等。 如：我们应当公平竞争。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. thường dùng với người hoặc vật",
            "usage": "cụ thể.\n如：现实社会中，女人与男人有时\n并不平等。\n如：我认为公司对这次事情的处\n理不够公平。\nNgữ pháp HSK 5 Phần 23",
            "ex_cn": "如：现实社会中，女人与男人有时",
            "ex_py": "Ngữ pháp HSK 5 Phần 23",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 一致",
            "usage": "● “一致” Tính từ, biểu thị không có sự chia rẽ, bất đồng. Ví dụ:\no ·····但文文跟他们的意见不一致，她坚持要去美国。\no 长期共同生活的夫妻在兴趣爱好，心理情绪上也趋于一致。\n● “一致” Cũng có thể làm phó từ, biểu thị cùng nhau. Ví dụ:\no 双方一致表示将进一步发展友好合作关系。\no 专家们一致认为这是一种成功的产品，可以放心使用。",
            "ex_cn": "● “一致” Tính từ, biểu thị không có sự chia rẽ, bất đồng. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 某",
            "usage": "● “某” Đại từ chỉ thị , thường chỉ một người hoặc một vật nhất định, bình\nthường dùng sau họ (họ tên) , biểu thị biết tên nhưng không nói ra，có lúc\nmang nghĩa xúc phạm. Ví dụ:\no 公司业员季某闻之大喜，以为自己碰到了一个大买主。\no 在公园的墙上写“某某到此一游”之类的行为是极不文明的。\n● “某” Cũng có thể chỉ người hoặc vật không xác định. Ví dụ:\no 人们如果长期进行某一方面的训练，就可以使大脑在某一方面的\n反应能力提高。\no 在这个陌生的地方，妈妈感到她们好像交换了某种身份：自己倒\n像女儿，而文文倒像妈妈。",
            "ex_cn": "● “某” Đại từ chỉ thị , thường chỉ một người hoặc một vật nhất định, bình",
            "ex_py": "thường dùng sau họ (họ tên) , biểu thị biết tên nhưng không nói ra，có lúc",
            "ex_vi": "mang nghĩa xúc phạm. Ví dụ:",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 幸亏",
            "usage": "● Phó từ, biểu thị do một vài nguyên nhân nào đó mà tránh được một số\nchuyện không hy vọng sẽ phát sinh. Ví dụ:\no 幸亏你提醒了我，我今天就去报名。\no 医生说这个病人是心脏问题，幸亏送来得及时。\no 妈妈忍不住流下了眼泪。她说：“幸亏那晚天色很暗”。",
            "ex_cn": "o 幸亏你提醒了我，我今天就去报名。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 单独 và 独自",
            "usage": "Giống: Đều có thể làm phó từ, có nghĩa là một mình.\n如：你太年轻了，恐怕不能单独/独自一人完成这个任务。\nKhác:\n单独 独自",
            "ex_cn": "如：你太年轻了，恐怕不能单独/独自一人完成这个任务。",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Thiên về nghĩa tự mình làm việc gì",
            "usage": "đó.\n如：你下午有时间吗？我想和你单\n独谈谈。\n如：孩子饿得等不及爸爸了，就\n独自先吃了起来。",
            "ex_cn": "如：你下午有时间吗？我想和你单",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Có thể làm tính từ, trong câu thì",
            "usage": "làm định ngữ. 3.Không thể làm tính từ.\n如：本科生上课有单独的教室。\nNgữ pháp HSK 5 Phần 24",
            "ex_cn": "如：本科生上课有单独的教室。",
            "ex_py": "Ngữ pháp HSK 5 Phần 24",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 行动",
            "usage": "● “行动” Động từ, biểu thị đi lại, hoạt động cơ thể. Ví dụ:\no 他运动时受伤了，行动不便。\no 有些鸟类喜欢单独行动。\n● Làm động từ, cũng có thể biểu thị tiến hành hành động nào đó vì mục đích\nnào đó . Ví dụ:\no 做什么事他都喜欢提前行动，早做准备。\no 有的人总是怀疑计划不够准确而迟迟不能开始行动。\n● Cũng có thể làm danh từ, biểu thị hoạt động, hành vi. Ví dụ:\no 郝老师到云南参加支教行动。\no 我们应该勇敢面对困难，迅速采取行动，主动承担责任。",
            "ex_cn": "● “行动” Động từ, biểu thị đi lại, hoạt động cơ thể. Ví dụ:",
            "ex_py": "● Làm động từ, cũng có thể biểu thị tiến hành hành động nào đó vì mục đích",
            "ex_vi": "nào đó . Ví dụ:",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 义务",
            "usage": "● “义务”Danh từ, biểu thị trách nhiệm về mặt pháp luật, đạo đức nên gánh vác,\nđảm nhiệm. Ví dụ:\no 不过，现在我们明白了，建设家乡，人人有责，我们也要承担这\n个义务。\no 参与社会事务和促进社会进步是每个人的权利，也是每个人的义\n务和责任。\n● Cũng có thể làm tính từ, biểu thị không nhận thù lao. Ví dụ:\no 我们每个学期都要至少参加三次义务劳动。\no 中国有关于九年制义务教育的法律。",
            "ex_cn": "● “义务”Danh từ, biểu thị trách nhiệm về mặt pháp luật, đạo đức nên gánh vác,",
            "ex_py": "đảm nhiệm. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Phân biệt 发言 và 发表",
            "usage": "Giống: Đều có thể làm động từ, đều liên quan đến biểu đạt ý kiến .\nKhác:\n发言 发表",
            "ex_cn": "发言 发表",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Chỉ hướng về tập thể, xã hội nói",
            "usage": "ra ý kiến của mình hoặc đăng bài\ntrên báo\n如：他上课从不发言，很多课不及\n格，平时也几乎不和同学交往。\n如：总统发表了有关两国关系的\n讲话。",
            "ex_cn": "如：他上课从不发言，很多课不及",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Có thể làm danh từ, chỉ những ý",
            "usage": "kiến đã phát biểu. 2. Không thể làm danh từ.\n如：他今天在会上的发言很精彩。",
            "ex_cn": "如：他今天在会上的发言很精彩。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Là từ li hợp, ở giữa có thể xen các",
            "usage": "thành phần khác, đằng sau không thể\nmang thêm tân ngữ.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Không phải từ li hợp.",
            "usage": "如：你已经发过言了吗？ 如：你发表过这篇文章吗？\nNgữ pháp HSK 5 Phần 25",
            "ex_cn": "如：你已经发过言了吗？ 如：你发表过这篇文章吗？",
            "ex_py": "Ngữ pháp HSK 5 Phần 25",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 朝",
            "usage": "● “朝” động từ, biểu thị hướng về, đối mặt. Ví dụ:\no 我们学校的正门坐西朝东。\no 我进去时，他正脸朝里和李主任商量着什么，没注意到我的到来。\n● “朝” cũng có thể làm giới từ, biểu thị phương hướng của hành vi, động tác\nđã chỉ. Không giống với “向”, không thể làm bổ ngữ.\no ·····老船长命今水手们立刻打开货舱，使劲儿朝里面放水。\no 我仿佛看到胜利正朝我们走来。",
            "ex_cn": "● “朝” động từ, biểu thị hướng về, đối mặt. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 简直",
            "usage": "● 简直 (quả là/thật là/tưởng như là) , phó từ, biểu thị gần như là vậy nhưng\ncũng không hẳn hoàn toàn là như vậy. Mang ngữ khí khoa trương, nhấn\nmạnh. Ví dụ:\no 听到刘方离婚的消息时，我简直不敢相信自己的耳朵。\no 这次张小姐变得格外可气、礼貌，与从前相比，简直像换了个人。\no “船长简直是疯了，这样做只会增加船的压力，船就会下沉得更\n快，这不是找死吗？”",
            "ex_cn": "● 简直 (quả là/thật là/tưởng như là) , phó từ, biểu thị gần như là vậy nhưng",
            "ex_py": "cũng không hẳn hoàn toàn là như vậy. Mang ngữ khí khoa trương, nhấn",
            "ex_vi": "mạnh. Ví dụ:",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Phân biệt 严肃 và 严格",
            "usage": "Giống: Đều là tính từ, biểu thị sự nghiêm túc,nghiêm khắc, không lơ là nhưng\nphạm vi sử dụng của cả hai lại khác nhau rất lớn, không thể thay thế dùng cho nhau.\nKhác:\n严肃 严格",
            "ex_cn": "严肃 严格",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Nhấn mạnh tác phong, thái độ, và",
            "usage": "các phương diện khác rất nghiêm túc.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Biểu thị khi tuân thủ chế độ, hoặc",
            "usage": "nắm vững tiêu chuẩn nghiêm khắc,\nkhông lơ là.\n如：小林这件事影响恶劣，我们对\n他一定要严肃批评。\n如：小华妈妈，平时对孩子教育\n很严格。",
            "ex_cn": "如：小林这件事影响恶劣，我们对",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Biểu thị thần sắc, bầu không khí,",
            "usage": "làm cho người khác vừa tôn trọng\nvừa sợ hãi. 2. Không có ý nghĩa như thế.\n如：一句幽默的笑话可以让紧张严\n肃的气氛变得轻松愉快。\nNgữ pháp HSK 5 Phần 26",
            "ex_cn": "如：一句幽默的笑话可以让紧张严",
            "ex_py": "Ngữ pháp HSK 5 Phần 26",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 来",
            "usage": "● “来” trợ từ, đứng sau các từ chỉ số “十、百、千”... hoặc từ chỉ số lượng\nbiểu thị ước lượng. Ví dụ :\no 他雇了 20 来个当地人为他带路和搬运行李。\no 按照老人教的方法，他几乎每天都能钓到 5 斤来重的大鱼。\n● “来” còn có thể dùng sau các từ chỉ số như “一、二、三” tạo thành kết cấu\n“一来······，二来······” biểu thị liệt kê lí do. Ví dụ:\no 今天是大年三十，我们来看看大家，一来是给大家送水果，二来\n是看看大家过节还有什么难处。\no 我对上海很有感情，一来上大学时在那里住过几年，二来我太太\n也是上海人。",
            "ex_cn": "● “来” trợ từ, đứng sau các từ chỉ số “十、百、千”... hoặc từ chỉ số lượng",
            "ex_py": "biểu thị ước lượng. Ví dụ :",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 至于",
            "usage": "● “至于” động từ, biểu thị đạt đến một loại trình độ nào đó., thường dùng\ntrong câu phản vấn.\no 我只是和你开个玩笑，你至于生那么大的气吗？\no 什么？一件衬衫要一千来块钱。哪至于那么贵呢？\n● “至于” cũng có thể làm giới từ, dùng trong kết cấu “（A）·····，至于\n（B）······” biểu thị nhắc đến một việc khác nữa.\no ·····至于这部电影片的投资人，可是一位大人物，他可不敢得罪。\no 我只知道他是六班的学生，至于住在哪儿，我就不清楚了。",
            "ex_cn": "● “至于” động từ, biểu thị đạt đến một loại trình độ nào đó., thường dùng",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 总算",
            "usage": "● “总算” (cuối cùng cũng) phó từ, biểu thị nguyện vọng cuối cùng cũng đã\nđược thực hiện sau khi trải qua một khoảng thời gian dài. Ví dụ:\no 经过沟通，大导演总算搞明白了。\no 总算把活儿干完了，可把我累坏了。\n● “总算” (nhìn chung/nói chung ) còn biểu thị về mặt cơ bản vẫn vượt qua\nđược.Ví dụ:\no 虽然我对这家宾馆不太满意，但总算有个睡觉的地方了。\no 临走前能和你见上一面，这趟总算没有白来！",
            "ex_cn": "● “总算” (cuối cùng cũng) phó từ, biểu thị nguyện vọng cuối cùng cũng đã",
            "ex_py": "được thực hiện sau khi trải qua một khoảng thời gian dài. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 总算 và 终于",
            "usage": "Giống: Đều là phó từ, đều có ý nghĩa biểu thị trải qua sự biến hóa, thay đổi trong\nthời gian dài hoặc sau khi chờ đợi xuất hiện một tình huống nào đó.\n如：这青年后来努力学艺，总算/终于有了一点儿小名气。\nKhác:\n总算 终于",
            "ex_cn": "如：这青年后来努力学艺，总算/终于有了一点儿小名气。",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Kết quả của sự việc thông thường",
            "usage": "đều là tình huống hy vọng sẽ phát\nsinh .",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Kết quả của sự việc hầu hết là tình",
            "usage": "huống hy vọng sẽ phát sinh nhưng\ncó thể là tình huống không được như\ný muốn.\n如：到北京的第二年，我总算找到\n了一份比较满意的工作。\n如：尽管他也很想去，但他终于\n还是放弃了留学的打算。",
            "ex_cn": "如：到北京的第二年，我总算找到",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Có thể biểu thị về mặt cơ bản có thể",
            "usage": "vượt qua được. 2.Không có ý nghĩa và cách dùng\nnày. 如：他才学了半年外语，能说成这\n样，总算不错了。\nNgữ pháp HSK 5 Phần 27",
            "ex_cn": "này. 如：他才学了半年外语，能说成这",
            "ex_py": "Ngữ pháp HSK 5 Phần 27",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 动词+下来",
            "usage": "● biểu thị hoàn thành, có lúc bao gồm cả ý nghĩa thoát ly hoặc cố định. Ví dụ:\no 你的论文大概什么时候发表？定下来了吗？\no 你看，那张纸是从这本书里撕下来的。\no 几局下来，基本上都是不到 10 分钟我就败下阵来。",
            "ex_cn": "o 你的论文大概什么时候发表？定下来了吗？",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 舍不得",
            "usage": "● động từ, biểu thị không muốn từ bỏ, tiêu phí hoặc sử dụng. Hình thức khẳng\nđịnh “舍得” dùng trong câu hỏi hoặc trả lời, so sánh. Ví dụ:\no 把你最喜欢的玩具送给小朋友，你舍得吗 ？\no 有些人对于把钱花在为家庭和自己的生活增加乐趣的事情上，总\n是有些舍不得。\no 可惜，大部分人都像你这样，开始不考虑得失，等到后来失去得\n多了，又开始舍不得，后果就是屡下屡败。",
            "ex_cn": "định “舍得” dùng trong câu hỏi hoặc trả lời, so sánh. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Phân biệt 损失 và 失去",
            "usage": "Giống: Đều có thể làm động từ, đều có nghĩa là ban đầu có còn sau này thì không\ncó.\n如：每走一步，你事先都应该想清楚：为了赢得什么，你愿意损失/失去什么，\n这样才可能赢。\nKhác:\n损失 失去",
            "ex_cn": "如：每走一步，你事先都应该想清楚：为了赢得什么，你愿意损失/失去什么，",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Biểu thị giảm đi. 1.Thông thường chỉ không còn gì .",
            "usage": "如：不到三分钟，我的棋子损失大\n半。 如：战争让他失去了家庭。",
            "ex_cn": "如：不到三分钟，我的棋子损失大",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Có thể làm danh từ. 2.Không thể làm danh từ 公司会赔偿我们的损失。",
            "usage": "Ngữ pháp HSK 5 Phần 28",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 从此",
            "usage": "● phó từ, biểu thị từ thời điểm này hoặc từ thời điểm nói trở đi. Ví dụ:\no 李白听了老婆婆的话，很受感动，从此他刻苦用功，最后成了一\n位伟大的诗人。\no 因为小学六年级的时候，他迷上了公交车，从此，他就一直关注\n公交线路，·······\no 嫦娥自己吃下了不死药，结果她飞到了月亮上，从此与后羿分离。",
            "ex_cn": "o 李白听了老婆婆的话，很受感动，从此他刻苦用功，最后成了一",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 假设",
            "usage": "● “假设”, động từ, biểu thị coi một số tình huống là thật. Ví dụ:\no 假设我要从国贸到鼓楼大街，该怎么乘车？\no 假设汽水两块钱一瓶，两个空瓶可以换一瓶汽水，如果给你 6 块\n钱，你最多能喝几瓶汽水？\n● “假设” , cũng có thể làm danh từ, biểu thị tình huống giả thiết, tưởng tượng.\nVí dụ:\no 你当年的假设已经被证明是对的。\no 这是一种大胆的假设，但不一定是科学的。",
            "ex_cn": "● “假设”, động từ, biểu thị coi một số tình huống là thật. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 堆",
            "usage": "● “堆” (đống/đám), lượng từ, dùng cho đám người hoặc đống đồ vật (không\nthể dùng với những người đáng kính) .Ví dụ:\no 他有问必答，不但准确无误地按顺序报了一大堆公交车、地铁站\n的名字，而且还给一对情侣制订了北京休息一日游的具体方案。\no 一个小师弟结婚才半年，就跑过来找我诉苦，说妻子几乎每天都\n要挑出他一大堆毛病：饭后不洗碗、睡前不洗脚······\n● “堆” , cũng có thể làm động từ, biểu thị dùng tay hoặc dụng cụ để xếp, chất\nlên nhau. Ví dụ：\no 这些零件怎么都堆在这儿啊？\no 今年真不错！你看这粮食，都堆成山了。\n● “堆” , còn có thể làm danh từ, biểu thị đồ vật xếp cùng nhau. Ví dụ:\no 工厂旁边有一个建筑材料堆。\no 叔叔把手指上的金戒指取了下来，扔到石头堆里。",
            "ex_cn": "● “堆” (đống/đám), lượng từ, dùng cho đám người hoặc đống đồ vật (không",
            "ex_py": "thể dùng với những người đáng kính) .Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 反应 và 反映",
            "usage": "Giống: Đồng âm, đều vừa có thể làm động từ vừa có thể làm danh từ.\nKhác:\n反应 反映",
            "ex_cn": "反应 反映",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Là động từ chỉ chịu kích thích của",
            "usage": "ngoại cảnh mà dẫn đến hành động\nhoặc biến hóa ;là danh từ chỉ những\nhành động này , những sự thay đổi\nnày.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Đem tình hình hoặc ý kiến báo",
            "usage": "cáo với cấp trên.\n如：这时人体精力下降，反应减\n慢，情绪地下，利于人体进入甜美\n的梦乡。\n如：请放心，我会把你的意见反\n映给学校。",
            "ex_cn": "如：这时人体精力下降，反应减",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Không còn ý nghĩa nào khác. 2.Còn có thể chỉ phô bày ra bản",
            "usage": "chất của sự vât.\n如：谈话可以反映一个人的职业\n特点。",
            "ex_cn": "如：谈话可以反映一个人的职业",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Không thể kết hợp với tân ngữ. 3.Có thể kết hợp với tân ngữ.",
            "usage": "如：他反应得非常快，一点儿也不\n用思考。\n如：这个电影反映了中国年轻一\n代的新变化。\nNgữ pháp HSK 5 Phần 29",
            "ex_cn": "如：他反应得非常快，一点儿也不",
            "ex_py": "Ngữ pháp HSK 5 Phần 29",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 不如",
            "usage": "● (không bằng) động từ, biểu thị không thể sánh bằng. Ví dụ:\no 求人不如求己。\no ······由于受到了建伟书店的影响，这三家书店的经营空间越来越\n小，三家的营业额加起来还不如他一家高。\no 如果找一个棋艺不如你或者和你差不多的人下棋，虽然你可能会\n轻易地战胜对手，但并不能使你的棋艺得到提高。",
            "ex_cn": "o 求人不如求己。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 干脆",
            "usage": "● “干脆，tính từ, hình dung khi nói chuyện, làm việc thẳng thắn, sòng phẳng,\nkhông do dự. Ví dụ:\no 他这人很干脆，说行就行，说不行就不行。\no 我求他帮忙，他答应得很干脆。\n● “干脆” (dứt khoát/ cứ)，cũng có thể làm phó từ, biểu thị đơn giản, quyết\nđoán. Ví dụ:\no 我已经试过六次了，还是不行，我看我干脆放弃好了。\no 这时，许多新朋好友建议他干脆把另三家书店挤垮，垄断这个市\n场。",
            "ex_cn": "● “干脆，tính từ, hình dung khi nói chuyện, làm việc thẳng thắn, sòng phẳng,",
            "ex_py": "không do dự. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 万一",
            "usage": "● “万一” ,liên từ, biểu thị khả năng rất nhỏ,thông thường dùng với trường hợp\nkhông ngờ đến hoặc bất lợi. Ví dụ:\no ·····万一他们自己跑到其他图书市场去“货比三家”，那我的生意\n就完了。\no 不要将所有的鸡蛋都放在一个篮子里，因为万一不小心，鸡蛋就\n有可能全部打碎。\n● “万一”, có thể làm danh từ, biểu thị tình huống bất ngờ có khả năng rất nhỏ.\nThường dùng trong cách thức cố định “就怕万一”“以防万一”. Ví dụ:\no 不怕一万，就怕万一。\no 她总是带着一把枪，以防万一。",
            "ex_cn": "● “万一” ,liên từ, biểu thị khả năng rất nhỏ,thông thường dùng với trường hợp",
            "ex_py": "không ngờ đến hoặc bất lợi. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 挤 và 拥挤",
            "usage": "Giống: Đều có thể làm động từ và tính từ, nghĩa về mặt tính từ đều là địa điểm đấy\nquá nhỏ so với người và vật .\n如：这么小的教室里放三四张桌子，太挤/拥挤了！\nKhác:\n挤 拥挤",
            "ex_cn": "如：这么小的教室里放三四张桌子，太挤/拥挤了！",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Động từ, nhấn mạnh dùng sức lực",
            "usage": "của mình để lách ra từ đám đông.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Động từ, nhấn mạnh chen chúc",
            "usage": "cùng một chỗ.\n如：坐车的人太多了，我挤了半天\n才挤上车。 如：请先下后上，不要拥挤。",
            "ex_cn": "如：坐车的人太多了，我挤了半天",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Thông thường làm vị ngữ. 2.Có thể làm chủ ngữ hoặc tân ngữ.",
            "usage": "如：为了买到票，我挤得满头大\n汗。\n如：交通拥挤是个大问题。",
            "ex_cn": "如：为了买到票，我挤得满头大",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Động từ ( vặn, bóp, nắn), chỉ dùng",
            "usage": "sức làm cho đồ vật từ trong lỗ nhỏ\nhoặc khe nhỏ ra ngoài.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Động từ, chỉ người hoặc vật chen",
            "usage": "chúc , dồn lại sát một chỗ, hoặc sự\nviệc tập trung/dồn lại trong cùng một\nlúc.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Không có ý nghĩa này.",
            "usage": "如果你的生活先被不重要的事挤满\n了，那你就无法再装进更大、更重\n要的事了。",
            "ex_cn": "如果你的生活先被不重要的事挤满",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "5. Không có ý nghĩa này. 如：许多新朋好友建议他干脆把另",
            "usage": "三家书店挤垮，垄断这个市场。\nNgữ pháp HSK 5 Phần 30",
            "ex_cn": "三家书店挤垮，垄断这个市场。",
            "ex_py": "Ngữ pháp HSK 5 Phần 30",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 无意",
            "usage": "● “无意” ,động từ, có nghĩa là không muốn, không có ý định. Ví dụ：\no 他无意伤害任何人。\no 我无意打扰您，不过我可以跟您谈一会儿吗？\n● “无意”, có thể làm phó từ, có nghĩa là không cố ý, thường nói, “ 无意中·····”\nVí dụ:\no 后来一位渔民无意中发现了一种巧妙而实用的方法······\no 他在收拾花园时，无意地找到了这只耳环。",
            "ex_cn": "● “无意” ,động từ, có nghĩa là không muốn, không có ý định. Ví dụ：",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 有利",
            "usage": "● tính từ, có nghĩa là có lợi, có ích. Thường dùng “有利于” để biểu thị có lợi\ncho người hoặc vật nào đó. Phủ định là “不利”\no 高高的个子，漂亮的外表，都是他的有利条件。\no 很多研究发现，适度的压力有利于我们保持良好的状态，······\no 笑能促进心肺活动，改善肌肉紧张状况，对睡眠也是有利的。",
            "ex_cn": "● tính từ, có nghĩa là có lợi, có ích. Thường dùng “有利于” để biểu thị có lợi",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 的确",
            "usage": "● phó từ, ý nghĩa là hoàn toàn chính xác, chân thực. Có thể trùng điệp “的的确\n确”。Ví dụ:\no 因此，“鮎鱼效应”的确对挖掘员工潜力，提高企业活力具有积极\n的意义。\no 他的确我所教过的学生中最聪明的。\no 咱们总裁选择李阳负责的的确确有些冒险，因为他太年轻了。",
            "ex_cn": "● phó từ, ý nghĩa là hoàn toàn chính xác, chân thực. Có thể trùng điệp “的的确",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 接近 và 靠近",
            "usage": "Giống: Đều là động từ, đều có nghĩa là khoảng cách giữa hai đối tượng rất gần\nhoặc chuyển động về mục tiêu nhất định, làm khoảng cách giữa cả hai trở nên nhỏ,\ncó lúc có thể dùng thay thế cho nhau\n如：这个地方接近/靠近北极地区，夏季白天很长，天亮得也很早。\nKhác:\n接近 靠近",
            "ex_cn": "如：这个地方接近/靠近北极地区，夏季白天很长，天亮得也很早。",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Từ được kết hợp có thể biểu thị",
            "usage": "người, sự vật, thời gian, địa điểm và\nsố lượng cụ thể.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Từ kết hợp có thể biểu thị người,",
            "usage": "sự vật, địa điểm cụ thể nhưng thông\nthường không thể dùng với thời\ngian, số lượng.\n如：接近下午一点时，救护车终于\n赶到了。\n如：他们挤在靠近车窗的地方，\n脸对脸离得很近。",
            "ex_cn": "如：接近下午一点时，救护车终于",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Còn có thể kết hợp với từ ngữ biểu",
            "usage": "thị sự vật trừu tượng 2.Thông thường không thể kết hợp\nvới những từ ngữ biểu thị sự vật trừu\ntượng. 如：经过努力，现在我们已越来越\n接近年初定下的销售目标了。",
            "ex_cn": "tượng. 如：经过努力，现在我们已越来越",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Không có ý nghĩa này. 如：他们俩的水平非常接近，这场",
            "usage": "比赛真不好说谁会赢。\nNgữ pháp HSK 5 Phần 31",
            "ex_cn": "比赛真不好说谁会赢。",
            "ex_py": "Ngữ pháp HSK 5 Phần 31",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 嗯 thán từ",
            "usage": "● “嗯” (đọc là ńg), biểu thị nghi vấn. Ví dụ:\no 嗯？不是 28 号，难道是我记错了？\no 嗯？人都去哪了？\n● “嗯” (đọc là ňg), biểu thị cảm thấy bất ngờ hoặc cho rằng không nên như\nvậy. Ví dụ:\no 嗯！你的房间为什么这么冷？\no 嗯！你怎么还没走啊？\n● “嗯” (đọc là ǹg), biểu thị đáp ứng hoặc chấp thuận. Ví dụ:\no 嗯，如果您心情好，我就说件事；心情不好就改天再说。\no 嗯，没问题，我这就给他送去。",
            "ex_cn": "● “嗯” (đọc là ńg), biểu thị nghi vấn. Ví dụ:",
            "ex_py": "vậy. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 轻易",
            "usage": "● “轻易” tính từ, có nghĩa là “简单容易”(đơn giản, dễ dàng) .Thông thường\nlàm trạng ngữ. Ví dụ:\no 领导有了兴趣，假，就这样轻易地请好了。\no 任何胜利都不是轻易得到的，背后都要付出艰苦的努力。\n● “轻易” ,còn có thể làm phó từ, biểu thị thái độ khi xử lí công việc không cẩn\nthận, rất tùy tiện. Thường dùng trong câu phủ định tạo thành cách thức “轻\n易不·······” biểu thị ý nghĩa “ 很少（做·······）”（rất ít làm）.Ví dụ:\no 他这个人的特点，是从不轻易决定，也不轻易转变。\no 他为人好强，轻易不求人，这次向咱们借钱，一定是遇到什么难\n事了。",
            "ex_cn": "● “轻易” tính từ, có nghĩa là “简单容易”(đơn giản, dễ dàng) .Thông thường",
            "ex_py": "làm trạng ngữ. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Phân biệt 轻易 và 容易",
            "usage": "Giống: Khi làm trạng ngữ, đều biểu thị làm không tốn công, khó khăn.\nKhác:\n轻易 容易",
            "ex_cn": "轻易 容易",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Thiên về hành sự thoải mái,",
            "usage": "không tốn sức lực. Thông thường\nlàm trạng ngữ.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Ngoài biểu thị sự việc rất đơn giản",
            "usage": "không khó làm, còn biểu thị nội\ndung sự việc không phức tạp. Có thể\nđộc lập làm vị ngữ.\n如：她从小学习就好，高考时很\n轻易地考上了名牌大学，接着又\n读了研究生。\n如：今天的考试特别容易，我半\n个小时就答完了。",
            "ex_cn": "如：她从小学习就好，高考时很",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Còn biểu thị khả năng xảy ra sự",
            "usage": "thay đổi nào đó\n如：他最近心情不好，容易发脾\n气",
            "ex_cn": "如：他最近心情不好，容易发脾",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Còn là phó từ, biểu thị tùy tiện. 3.Không có cách dùng này.",
            "usage": "如：我爱书，无论走到哪里，我\n从不轻易放过书摊、书店。\nNgữ pháp HSK 5 Phần 32",
            "ex_cn": "如：我爱书，无论走到哪里，我",
            "ex_py": "Ngữ pháp HSK 5 Phần 32",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 密切",
            "usage": "● “密切”, tính từ, có thể biểu thị quan hệ gần gũi, mật thiết. Ví dụ:\no 还有一部分污染和我们的日常生活密切相关，汽车尾气就是其中\n之一。\no 参加了这次环保活动后，两人便有了共同语言，来往也比先前密\n切了。\n● “密切” , còn có thể biểu thị（đối với các vấn đề）chú trọng, tỉ mỉ, thấu đáo.\nVí dụ:\no 刘医生密切地观察着李妈妈病情的发展。\no 家长应和老师密切配合，形成合力，保持教育的一致性。\n● “密切” ,còn có thể làm động từ, có nghĩa làm cho quan hệ trở nên gần gũi\nmật thiết hơn. Ví dụ:\no 这条铁路的建成，大大密切了西南地区与首都的关系。\no 友好城市之间的交往密切了两国人民之间的友谊。",
            "ex_cn": "● “密切”, tính từ, có thể biểu thị quan hệ gần gũi, mật thiết. Ví dụ:",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 尽量",
            "usage": "● phó từ, biểu thị trong một phạm vi nhất định nỗ lực đạt đến mức độ cao nhất.\nVí dụ:\no 同时，尽量多骑自行车，多选择公共交通，少使用私家车。\no 老年人要尽量少吃油炸食品。\no 为了节约能源，请大家都尽量使用节能电器。",
            "ex_cn": "o 同时，尽量多骑自行车，多选择公共交通，少使用私家车。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 逐步",
            "usage": "● biểu thị từng bước từng bước một, dùng trong những tình huống do còn\nngười làm ra, thông thường không thể bổ sung cho từ ngữ có tính chất là\ntính từ. Ví dụ:\no 云计算应用市场规模正在逐步扩大。\no ·····调整能源消费结构，逐步向可再生能源转变。\no 记者了解到，现在受灾群众已逐步恢复了正常的生产生活。",
            "ex_cn": "o 云计算应用市场规模正在逐步扩大。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 鼓励 và 鼓舞",
            "usage": "Giống: Đều là động từ, đều có ý nghĩa làm cho người khác phấn khới, tăng thêm\ntự tin.\n如： 这次谈话，使刘洋受到极大的鼓励/鼓舞。\nKhác:\n鼓励 鼓舞",
            "ex_cn": "如： 这次谈话，使刘洋受到极大的鼓励/鼓舞。",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Từ trung tính, có thể dùng ở",
            "usage": "những phương diện không tốt. 1.Từ mang nghĩa tốt\n如：吸烟有害健康，你不阻止\n他，怎么还鼓励呢？\n如：新产品的研制成功极大地鼓\n舞了科技人员。",
            "ex_cn": "如：吸烟有害健康，你不阻止",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Ngữ nghĩa thiên về khích lệ đối",
            "usage": "phương tham gia vào một hoạt động\nnào đó. Chủ ngữ thường là người\nhoặc tổ chức.\nThường dùng hình thức kiêm ngữ\n“鼓励某人做某事”",
            "ex_cn": "“鼓励某人做某事”",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Ngữ nghĩa thiên về tinh thần phấn",
            "usage": "chấn do sự ảnh hưởng nào đó. Chủ\nngữ thường là sự vật\n如：近些年，国家越来越鼓励大\n学生毕业后开办自己的公司。\n如：新的胜利给了全体队员很大\n的鼓舞。\n3。Không có ý nghĩa và cách dùng\nnày.",
            "ex_cn": "如：近些年，国家越来越鼓励大",
            "ex_py": "3。Không có ý nghĩa và cách dùng",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Có thể làm tính từ, mô tả sự hưng",
            "usage": "phấn, phấn khởi.\n如：年初制定的目标顺利实现，\n取得的成绩令人十分鼓舞。\nNgữ pháp HSK 5 Phần 33",
            "ex_cn": "如：年初制定的目标顺利实现，",
            "ex_py": "Ngữ pháp HSK 5 Phần 33",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 照常",
            "usage": "● “照常” , động từ, có nghĩa là giống như bình thường (跟平常一样). Ví dụ:\no 虽然战争临近，但这里的日常生活，一切照常。\no 大火对东区的商业活动没有造成大的影响，区内商业活动照常。\n● “照常” ，còn có thể làm phó từ, biểu thị tình huống tiếp tục không thay đổi.\nVí dụ:\no 在东方广场的迎新活动照常举行。\no 九月中旬的一天早晨，詹森照常提前出门赶在早高峰之前去交通\n部。",
            "ex_cn": "● “照常” , động từ, có nghĩa là giống như bình thường (跟平常一样). Ví dụ:",
            "ex_py": "Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 难怪",
            "usage": "● “难怪”, động từ, có nghĩa là “不应当批评或抱怨” （không nên phê bình,\noán trách）, mang ngữ khí thông cảm, tha thứ. Ví dụ:\no 这也难怪，他每天那么忙，哪儿有时间操心孩子的事啊！\no 这也难怪，与其堵在路上浪费时间和汽油，污染环境，倒不如改\n乘公交出行。\n● “难怪”, còn là phó từ, biểu thị đã rõ nguyên nhân, không còn cảm thấy lạ\nlùng với tình huống nào đó nữa. Ví dụ:\no 你的抽屉真乱，难怪总是找不到东西。\no 他都 18 岁了，还不敢一个人走夜路，难怪大家都叫他胆小鬼。",
            "ex_cn": "● “难怪”, động từ, có nghĩa là “不应当批评或抱怨” （không nên phê bình,",
            "ex_py": "oán trách）, mang ngữ khí thông cảm, tha thứ. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 与其",
            "usage": "● liên từ, khi so sánh 2 tình huống cần phải lựa chọn, “与其” sử dụng về mặt\ntừ bỏ, đằng sau có thể kết hợp dùng với “不如”“宁可”. Ví dụ:\no 与其说是采访，不如说是向他学习。\no 与其找个不认真的小时工，我宁可自己打扫。\no 这也难怪，与其堵在路上浪费时间和汽油，污染环境，倒不如改\n乘公交出行。",
            "ex_cn": "● liên từ, khi so sánh 2 tình huống cần phải lựa chọn, “与其” sử dụng về mặt",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 表现 và 体现",
            "usage": "Giống: Đều là động từ, đều có nghĩa là hiển thị ra\n如：这部电影表现/体现出鲜明的时代特点。\nKhác:\n表现 体现",
            "ex_cn": "如：这部电影表现/体现出鲜明的时代特点。",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Thiên về phản ánh một phong cách, 1.Nhấn mạnh hiện tượng, tính chất",
            "usage": "tình cảm, thái độ… nào đó của người\nhoặc sự vật.\nhoặc tư tưởng, tinh thần… nào đó\nthông qua người hoặc sự vật cụ thể\nbiểu hiện ra.\n如：他总是乐呵呵的，对什么事都\n表现得很乐观。\n如：不同文化的差异在语言特别\n是词语上体现得最突出。",
            "ex_cn": "如：他总是乐呵呵的，对什么事都",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Còn có ý nghĩa là cố ý chứng tỏ ưu",
            "usage": "điểm, điểm mạnh của bản thân.\nThường mang nghĩa xấu. 2.Không có ý nghĩa này.\n如：为了得到领导的欣赏，他拼命\n地表现自己。",
            "ex_cn": "如：为了得到领导的欣赏，他拼命",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Còn có thể làm danh từ, chỉ trạng",
            "usage": "thái của hành động lời nói.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Không có ý nghĩa này. 如：我们对你的表现很满意，你下",
            "usage": "周一能来上班吗?\nNgữ pháp HSK 5 Phần 34",
            "ex_cn": "周一能来上班吗?",
            "ex_py": "Ngữ pháp HSK 5 Phần 34",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 总之",
            "usage": "● liên từ, khái quát tình huống trước đó, nói tóm lại. Ví dụ:\no 暑假我可能去上海、南京，还有杭州，总之，想去南方几个城市\n转转。\no 总之，网络的确带给我们以前无法想象的方便，但同时它也带来\n了一定的危害。\no 总之，在鸟儿的生活中，羽毛充当着十分重要的角色。",
            "ex_cn": "o 暑假我可能去上海、南京，还有杭州，总之，想去南方几个城市",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 动词+过",
            "usage": "● Biểu thị người hoặc vật thể thông qua động tác để thay đổi phương hướng.\nVí dụ:\no 他转过身，一句话也不说。\no ·····它们只要有时间，就会情不自禁地背过头去，反复地啄着羽\n毛，······\n● Biểu thị người hoặc vật thể thông qua động tác để di chuyển vị trí. Ví dụ:\no 接过书的那一刻，老王突然明白了自己失败的原因。\no 短短的几分钟里，我的脑子里闪过了很多想法。",
            "ex_cn": "o 他转过身，一句话也不说。",
            "ex_py": "● Biểu thị người hoặc vật thể thông qua động tác để di chuyển vị trí. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 动词+开",
            "usage": "● biểu thị mở ra, giãn ra. Ví dụ:\no 猴子突然站了起来，张开手臂，抱住了管理员。\no 《清明上河图》在我们的面前慢慢展开。\no 而老鹰的洗澡方式更是直接，它们会在雨中张开双翅痛快地迎接\n洗礼！",
            "ex_cn": "o 猴子突然站了起来，张开手臂，抱住了管理员。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 反复 và 重复",
            "usage": "Giống: Đều có ý nghĩa là hơn 1 lần.\n如：这件事情你已经反复/重复说过好几遍了。\nKhác:\n反复 重复",
            "ex_cn": "如：这件事情你已经反复/重复说过好几遍了。",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Phó từ, nhiều lần. 1.Động từ, chỉ lại một lần nữa làm",
            "usage": "điều tương tự\n如：他们只要一有时间，就会情不\n自禁的背过头去，反复地啄着羽\n毛。\n如：我没听清，请你再重复一\n遍。",
            "ex_cn": "如：他们只要一有时间，就会情不",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Động từ, đồ vật tương tự lại lần",
            "usage": "nữa xuất hiện.\n如：这种病容易反复。 如：这两个练习题重复了。",
            "ex_cn": "如：这种病容易反复。 如：这两个练习题重复了。",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Không có ý nghĩa này. 如：对这个问题，他思想上可能还",
            "usage": "有反复。\nNgữ pháp HSK 5 Phần 35",
            "ex_cn": "有反复。",
            "ex_py": "Ngữ pháp HSK 5 Phần 35",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 赶快",
            "usage": "● phó từ, ý nghĩa là “抓紧时间、加快速度”（bắt kịp thời gian, gia tăng tốc\nđộ）.Ví dụ:\no 我下个月要搬家，得赶快找房子。\no 这份材料下午开会要用，你赶快把它复印一下。\no ·····一旦温度上升，大脑就会指挥我们的身体赶快出汗，······",
            "ex_cn": "● phó từ, ý nghĩa là “抓紧时间、加快速度”（bắt kịp thời gian, gia tăng tốc",
            "ex_py": "độ）.Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 片",
            "usage": "● “片”，danh từ, đồ vật có bề mặt phẳng, mỏng, thường không quá lớn. Ví dụ:\no 瓶子里装着满满的石头、玻璃碎片和沙子。\no 大树出的“汗”，通常是从叶片的气孔里冒出来的，······\n● “片”，còn là lượng từ, dùng để chỉ những đồ vật thành phiến (成片); cũng\ncó thể dùng với âm thanh, cảnh sắc…Ví dụ:\no 窗外有一棵大树，秋风中，叶子一片片地掉落下来。\no 同学们听了，发出一片热烈的欢呼声。",
            "ex_cn": "● “片”，danh từ, đồ vật có bề mặt phẳng, mỏng, thường không quá lớn. Ví dụ:",
            "ex_py": "có thể dùng với âm thanh, cảnh sắc…Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 根本",
            "usage": "● “根本”, danh từ, bộ phận quan trọng nhất của sự vật. Ví dụ:\no 教育是国家的根本。\no 这个办法只能救急，不能从根本上解决问题。\n● “根本”, còn là tính từ, ý nghĩa là“主要的、最重要的、起决定作用的”\n（chủ yếu, quan trọng nhất, đóng vai trò quyết định）\no 谈判还算顺利，一些根本的问题都谈好了。\no 政府工作应从人民的根本利益出发。\n● “根本”, còn là phó từ, biểu thị từ đầu đến cuối, trước sau như một, thường\ndùng trong câu phủ định. Ví dụ:\no 有时候我会梦见参加考试，可是却发现自己根本读不懂考试的题\n目。\no 可是，经过测验计算发现，以大树输送管道的尺寸产生的毛细作\n用，根本无法把水分送到几十米高的地方。\n● “根本”, khi làm phó từ, còn biểu thị triệt để, hoàn toàn. Ví dụ:\no 事情已经根本解决了。\no 他根本就是在故意找我们的麻烦。",
            "ex_cn": "● “根本”, danh từ, bộ phận quan trọng nhất của sự vật. Ví dụ:",
            "ex_py": "（chủ yếu, quan trọng nhất, đóng vai trò quyết định）",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 特殊 và 特别",
            "usage": "Giống: Khi làm tính từ, đều có nghĩa là không giống với bình thường.\n如：对我来说， 他是一个特殊/特别的人。\nKhác:\n特殊 特别",
            "ex_cn": "如：对我来说， 他是一个特殊/特别的人。",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Thường dùng trong văn viết. 1.Văn viết hay khẩu ngữ đều có thể",
            "usage": "sử dụng.\n如：因为跟蒸腾作用有关，这种特\n殊的提升力就被称为“蒸腾拉力“ 如：她穿衣服总是很特别。",
            "ex_cn": "如：因为跟蒸腾作用有关，这种特",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Còn có thể làm phó từ. Ý nghĩa là",
            "usage": "格外 “ đặc biệt“.\n如：我特别喜欢学中文，尤其是\n汉子。\nNgữ pháp HSK 5 Phần 36",
            "ex_cn": "格外 “ đặc biệt“.",
            "ex_py": "Ngữ pháp HSK 5 Phần 36",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. 除非",
            "usage": "● “除非”, liên từ, biểu thị điều kiện duy nhất, giống với “只有”, đằng sau\nthường đi với “才、否则、不然”.Ví du：\no 可除非是那些好种易活、自己会奋斗的花草，否则他是不养的。\no 除非急需一大笔钱，我才会考虑卖了这房子。\n● “除非”,cũng là giới từ, biểu thị không bao gồm tính toán, giống với “除了”.\nVí dụ:\no 这种机器，除非李阳，没人修得好。\no 日常工作他从来不过问，除非极特殊的问题。",
            "ex_cn": "● “除非”, liên từ, biểu thị điều kiện duy nhất, giống với “只有”, đằng sau",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. 直",
            "usage": "● “直”，làm phó từ có thể biểu thị luôn luôn, thẳng tuốt, trực tiếp, đằng sau là\nđộng từ đơn âm tiết. Ví dụ:\no 这趟车可以直达北京，非常方便。\no 直到今天，我也不明白他当时为什么发那么大脾气。\n● “直”, còn có thể biểu thị liên tiếp, không ngừng nghỉ (một động tác,hành vi).\nVí dụ:\no 父亲听说儿子卖了房子，气得直发抖。\no 几百盆花，要很快地抢到屋里去，累得腰酸腿疼，热汗直流。",
            "ex_cn": "● “直”，làm phó từ có thể biểu thị luôn luôn, thẳng tuốt, trực tiếp, đằng sau là",
            "ex_py": "động từ đơn âm tiết. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. 反正",
            "usage": "● “反正”, phó từ, biểu thị tình huống tuy không giống nhưng kết quả lại như\nnhau. Ví dụ:\no 不管你们谁去，反正我不会去。\no 我不知道花草们受我的照顾， 感谢我不感谢，反正我要感谢它们。\n● “反正”, còn biểu thị ngữ khí kiên quyết khẳng định. Ví dụ:\no 你别再说了，反正我是会考虑的。\no 算了，反正不是什么要紧事，还是别打扰他们了。",
            "ex_cn": "● “反正”, phó từ, biểu thị tình huống tuy không giống nhưng kết quả lại như",
            "ex_py": "nhau. Ví dụ:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 应付 và 处理",
            "usage": "Giống: Đều là động từ, đề có nghĩa là áp dụng phương pháp, biện pháp đối với\nngười, sự việc.\n如：依我看，以他现在有的经验应付/处理不了目前的工作。\nKhác:\n应付 处理",
            "ex_cn": "如：依我看，以他现在有的经验应付/处理不了目前的工作。",
            "ex_py": "Khác:",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Thiên về biểu thị áp dụng phương",
            "usage": "pháp phù hợp với người và sự việc.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "1. Thiên về nhấn mạnh giải quyết",
            "usage": "vấn đề.\n如：他们会想方设法说服你，你\n准备好怎么应付他们了吗?\n如：严重的环境污染使人们深思\n该如何处理好人与自然的关系。",
            "ex_cn": "如：他们会想方设法说服你，你",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "2. Còn có ý nghĩa là làm việc không",
            "usage": "chăm chỉ, không có trách nhiệm, chỉ\nthể hiện tốt mặt bề ngoài. 2.Không có ý nghĩa này.\n如：小林学习不认真，完全是在\n应付父母和老师。",
            "ex_cn": "如：小林学习不认真，完全是在",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Còn có nghĩa là sắp xếp, xứ lý sự",
            "usage": "vật.\n如：洗衣机的包装纸箱，既占地\n方又没什么用，快处理了吧。",
            "ex_cn": "如：洗衣机的包装纸箱，既占地",
            "ex_py": "",
            "ex_vi": "",
            "source": "TỔNG HỢP NGỮ PHÁP HSK5.pdf",
            "page": ""
        },
        {
            "structure": "3. Bình thường rất ít khi sử dụng cấu trúc trùng điệp",
            "usage": "3. Có thể trùng điệp kiểu AABB. Cũng có thể linh động làm động từ. Thường thì trùng điệp kiểu ABAB\n如：踢完球了？洗个热水澡舒服舒服吧\nNgữ pháp HSK 5 Phần 4",
            "ex_cn": "如：踢完球了？洗个热水澡舒服舒服吧",
            "ex_py": "Ngữ pháp HSK 5 Phần 4",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "2. Thường không thể làm định ngữ và trạng ngữ",
            "usage": "2. Có thể dùng làm định ngữ hoặc trạng ngữ\n如：她找到了一份满意的工作\n3. Có thể kết hợp với “希望，要求，条件，愿望”",
            "ex_cn": "如：她找到了一份满意的工作",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "3. Thường không trực tiếp kết hợp với các tân ngữ.",
            "usage": "如：这个我不想要，他不能满足我们的要求。\nPhần 5",
            "ex_cn": "如：这个我不想要，他不能满足我们的要求。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Thường thiên về mô tả hành động, hình tượng...đem đến cho người khác một cảm giác tốt đẹp.",
            "usage": "如：她有一双美丽的大眼睛。\n如：演员们的动作十分优美",
            "ex_cn": "如：她有一双美丽的大眼睛。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "2. Còn có thể mô tả phi thị giác (nghe)",
            "usage": "如：雨后天空中出现了一道美丽的彩虹。\n如：一进院子就听到了丽丽那优美的歌声",
            "ex_cn": "如：雨后天空中出现了一道美丽的彩虹。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "3. Không có cách dùng này",
            "usage": "如：他有一颗美丽善良的心。\nNgữ pháp HSK 5 Phần 6",
            "ex_cn": "如：他有一颗美丽善良的心。",
            "ex_py": "Ngữ pháp HSK 5 Phần 6",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Dùng nhiều trong khẩu ngữ",
            "usage": "1.Dùng trong văn viết\n如：我跟您打听一下，附近有邮局吗？\n如： 他仔细询问了公司近年来的发展情况。",
            "ex_cn": "如：我跟您打听一下，附近有邮局吗？",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "2. Đằng sau không thể thêm BNKQ “到” ngoài ra còn mang nghĩa trưng cầu ý kiến.",
            "usage": "如：我到处打听也没打听到这家公司。\n如：他打电话询问刘教授对论文的意见。",
            "ex_cn": "如：我到处打听也没打听到这家公司。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "3. Đằng sau có thể thêm đối tượng của hành động, cũng có thể linh hoạt làm danh từ.",
            "usage": "如：警察询问了当天见过他的另据。\n他详细地回答了病人的询问。\nNgữ pháp HSK 5 Phần 7",
            "ex_cn": "如：警察询问了当天见过他的另据。",
            "ex_py": "Ngữ pháp HSK 5 Phần 7",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Phó từ, khi đứng trước động từ thì đằng trước phải thêm chủ ngữ",
            "usage": "如：相处久了，彼此既然可以从表情，声音和行为举止中了解对方的意思。\n如：好朋友应该互相帮助。\n2. Có thể làm tân ngữ, định ngữ.\n2. Không thể làm tân ngữ hoặc định ngữ.\n如：我们是最好的朋友，不分彼此。(tân ngữ)\n我们彼此的爱好相同。(định ngữ)\n3. Có thể trùng điệp, biểu thị cả hai không khác nhau mấy.\n3. Không thể trùng điệp.\n如：咱们俩彼此彼此，我画的比你好不了多少。\nNgữ pháp HSK 5 Phần 9",
            "ex_cn": "如：相处久了，彼此既然可以从表情，声音和行为举止中了解对方的意思。",
            "ex_py": "2. Có thể làm tân ngữ, định ngữ.",
            "ex_vi": "2. Không thể làm tân ngữ hoặc định ngữ.",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Đại từ, có thể làm chủ ngữ, tân ngữ, định ngữ ....",
            "usage": "如：老人总是亲自喂养他的猴子\n如：请大家带好自己的资料。\n2.Thường dùng với những người có thân phận, địa vị cao hoặc những việc bình thường không hay làm.\n2. Nhấn mạnh người hoàn thành động tác là bản thân chứ không phải ai khác.\n如：这份礼物是市长亲自为生病的小女孩儿做的。\n如：你应该自己努力学习，不能总是靠别人。\nNgữ pháp HSK 5 Phần 10",
            "ex_cn": "如：老人总是亲自喂养他的猴子",
            "ex_py": "2.Thường dùng với những người có thân phận, địa vị cao hoặc những việc bình thường không hay làm.",
            "ex_vi": "2. Nhấn mạnh người hoàn thành động tác là bản thân chứ không phải ai khác.",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Chỉ biểu hiện ra một số đặc tính.",
            "usage": "如：相片显示：马奔跑时始终有蹄着地。\n如：几年不见，他显得成熟多了。",
            "ex_cn": "如：相片显示：马奔跑时始终有蹄着地。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "2. Thường kết hợp với tính từ.",
            "usage": "如：这次活动的组织显示出了他的才能。\n如：中秋节那天，月亮显得格外明亮。\nNgữ pháp HSK 5 Phần 11",
            "ex_cn": "如：这次活动的组织显示出了他的才能。",
            "ex_py": "Ngữ pháp HSK 5 Phần 11",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Động tác có thể bị ngắt quãng, dừng lại ở giữa",
            "usage": "如：这场雨持续下了两个多小时。\n如：对不起！打扰了，你们继续学习吧。\n2. Có thể làm định ngữ\n2. Không thể làm định ngữ.\n如：持续的高温让许多老人感到不适\n2. Có thể đi với bổ ngữ thời lượng.",
            "ex_cn": "如：这场雨持续下了两个多小时。",
            "ex_py": "2. Có thể làm định ngữ",
            "ex_vi": "2. Không thể làm định ngữ.",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "3. Thường không thể thêm bổ ngữ thời lượng.",
            "usage": "如：小明发烧持续三天了，家里人都很着急。\nNgữ pháp HSK 5 Phần 12",
            "ex_cn": "如：小明发烧持续三天了，家里人都很着急。",
            "ex_py": "Ngữ pháp HSK 5 Phần 12",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Động từ",
            "usage": "如：这个城市的经济不太发达。\n如：这个城市正在大力发展经济。",
            "ex_cn": "如：这个城市的经济不太发达。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "2. Chỉ sự biến hóa, thay đổi của sự vật.",
            "usage": "如：由于中国互联网的用户数量以及市场成熟程度等都低于发达国家，在产品创新上难有领导地位。\n如：中国还是一个发展中国家。\nNgữ pháp HSK 5 Phần 13",
            "ex_cn": "如：由于中国互联网的用户数量以及市场成熟程度等都低于发达国家，在产品创新上难有领导地位。",
            "ex_py": "Ngữ pháp HSK 5 Phần 13",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "2. Thường mô tả ánh sáng, dòng điện, màu sắc, mùi vị hoặc mô tả tình cảm, tư tưởng, nguyện vọng của con người.",
            "usage": "如：人在激烈运动时，会出很多汗。\n如: 这里夏天尽管阳光的照射很强烈，但白天气温很少超过35°C。\nPhần 14",
            "ex_cn": "如：人在激烈运动时，会出很多汗。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "2. Phó từ, không thể làm định ngữ hoặc bổ sung cho phân câu.",
            "usage": "如：我们通常的做法都是这样的。\n如：他常常去上海出差，对上海很熟悉。\nPhần 15",
            "ex_cn": "如：我们通常的做法都是这样的。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Biểu thị lúc công việc đạt được mục đích đã dự tính trước, thường làm trạng ngữ",
            "usage": "1.Không chỉ dùng trên phương diện công việc, sự nghiệp còn dùng được ở nhiều phương diện khác. Có thể làm trạng ngữ hoặc vị ngữ.\n如：经过一年多的努力，我们胜利地完成了调查工作。\n如：经过艰苦的努力，实验终于成功了。",
            "ex_cn": "如：经过一年多的努力，我们胜利地完成了调查工作。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "3. Là tính từ, có nghĩa là làm cho người khác hài lòng, có thể làm bổ ngữ",
            "usage": "如：这部电视剧拍得很成功，在全国播出后，受到观众的喜爱。\nPhần 16",
            "ex_cn": "如：这部电视剧拍得很成功，在全国播出后，受到观众的喜爱。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Không có nghĩa như vậy.",
            "usage": "如：早到了30分钟，所以我临时决定去旁边的书店看看。",
            "ex_cn": "如：早到了30分钟，所以我临时决定去旁边的书店看看。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "3. Không có cách dùng này.",
            "usage": "如：麻烦你春节后帮刘方的女儿找份临时工作。\nPhần 17",
            "ex_cn": "如：麻烦你春节后帮刘方的女儿找份临时工作。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "2. Về mặt thái độ thông thường là cố ý hoặc mang tính lựa chọn.",
            "usage": "如：我们常常忽视结束退场时的准备，演出开始时人们认为很有魅力，但是糟糕的结局会给人留下难以忘记的坏印象。\n如：虽然这是一次小考，他也不能轻视要好好复习。\nPhần 18",
            "ex_cn": "如：我们常常忽视结束退场时的准备，演出开始时人们认为很有魅力，但是糟糕的结局会给人留下难以忘记的坏印象。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Thường thiên về chỉ một khoảng thời gian nào đó từ lúc trước cho đến hiện tại. Ví dụ:",
            "usage": "1. Có thể thiên về chỉ một khoảng thời gian nào đó, cũng có thể chỉ thời điểm nào đó, còn có thể nhấn mạnh sự so sánh với quá khứ.\n如：到目前为止，事情还没有变化。\n如：我现在就去。\n2. Không thể dùng kết hợp với từ chỉ thời gian cụ thể.\n2. Có thể dùng kết hợp với từ chỉ thời gian cụ thể. Ví dụ:\n如：现在是北京时间上午十点钟。\nPhần 19",
            "ex_cn": "如：到目前为止，事情还没有变化。",
            "ex_py": "2. Không thể dùng kết hợp với từ chỉ thời gian cụ thể.",
            "ex_vi": "2. Có thể dùng kết hợp với từ chỉ thời gian cụ thể. Ví dụ:",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "4. Phân biệt 记录 và 纪录",
            "usage": "记录\n纪录\n不同点\n1.Có thể làm động từ, chỉ đem lời nói nghe thấy hoặc việc xảy ra ghi chép lại.",
            "ex_cn": "记录",
            "ex_py": "1.Có thể làm động từ, chỉ đem lời nói nghe thấy hoặc việc xảy ra ghi chép lại.",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Danh từ, chỉ thành tích tốt nhất trong khoảng thời gian nhất định, trong phạm vi nhất định.",
            "usage": "如：我已经把这次会议的内容详细地记录下来了。\n如：他在本次比赛中打破了世界纪录。",
            "ex_cn": "如：我已经把这次会议的内容详细地记录下来了。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "2. Danh từ, cũng có thể chỉ việc ghi lại những sự kiện có giá trị tin tức.",
            "usage": "如：第二天还书时再把记录一个一个地画掉。\n小刘，你来做这次会议的记录。\n如：学校带孩子们看了一部有教育意义的纪录片。\nNgữ pháp HSK 5 Phần 21",
            "ex_cn": "如：第二天还书时再把记录一个一个地画掉。",
            "ex_py": "Ngữ pháp HSK 5 Phần 21",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "2. thường dùng với người hoặc vật cụ thể.",
            "usage": "如：现实社会中，女人与男人有时并不平等。\n如：我认为公司对这次事情的处理不够公平。\nNgữ pháp HSK 5 Phần 23",
            "ex_cn": "如：现实社会中，女人与男人有时并不平等。",
            "ex_py": "Ngữ pháp HSK 5 Phần 23",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Chỉ hướng về tập thể, xã hội nói ra ý kiến của mình hoặc đăng bài trên báo",
            "usage": "如：他上课从不发言，很多课不及格，平时也几乎不和同学交往。\n如：总统发表了有关两国关系的讲话。\n2.Có thể làm danh từ, chỉ những ý kiến đã phát biểu.\n2. Không thể làm danh từ.\n如：他今天在会上的发言很精彩。",
            "ex_cn": "如：他上课从不发言，很多课不及格，平时也几乎不和同学交往。",
            "ex_py": "2.Có thể làm danh từ, chỉ những ý kiến đã phát biểu.",
            "ex_vi": "2. Không thể làm danh từ.",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Biểu thị khi tuân thủ chế độ, hoặc nắm vững tiêu chuẩn nghiêm khắc, không lơ là.",
            "usage": "如：小林这件事影响恶劣，我们对他一定要严肃批评。\n如：小华妈妈，平时对孩子教育很严格。",
            "ex_cn": "如：小林这件事影响恶劣，我们对他一定要严肃批评。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "2. Không có ý nghĩa như thế.",
            "usage": "如：一句幽默的笑话可以让紧张严肃的气氛变得轻松愉快。\nNgữ pháp HSK 5 Phần 26",
            "ex_cn": "如：一句幽默的笑话可以让紧张严肃的气氛变得轻松愉快。",
            "ex_py": "Ngữ pháp HSK 5 Phần 26",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Kết quả của sự việc hầu hết là tình huống hy vọng sẽ phát sinh nhưng có thể là tình huống không được như ý muốn.",
            "usage": "如：到北京的第二年，我总算找到了一份比较满意的工作。\n如：尽管他也很想去，但他终于还是放弃了留学的打算。\n2. Có thể biểu thị về mặt cơ bản có thể vượt qua được.",
            "ex_cn": "如：到北京的第二年，我总算找到了一份比较满意的工作。",
            "ex_py": "2. Có thể biểu thị về mặt cơ bản có thể vượt qua được.",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "2. Không có ý nghĩa và cách dùng này.",
            "usage": "如：他才学了半年外语，能说成这样，总算不错了。\nNgữ pháp HSK 5 Phần 27",
            "ex_cn": "如：他才学了半年外语，能说成这样，总算不错了。",
            "ex_py": "Ngữ pháp HSK 5 Phần 27",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Thông thường chỉ không còn gì .",
            "usage": "如：不到三分钟，我的棋子损失大半。\n如：战争让他失去了家庭。\n2.Có thể làm danh từ.\n2.Không thể làm danh từ\n公司会赔偿我们的损失。\nNgữ pháp HSK 5 Phần 28",
            "ex_cn": "如：不到三分钟，我的棋子损失大半。",
            "ex_py": "2.Có thể làm danh từ.",
            "ex_vi": "2.Không thể làm danh từ",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Đem tình hình hoặc ý kiến báo cáo với cấp trên.",
            "usage": "如：这时人体精力下降，反应减慢，情绪地下，利于人体进入甜美的梦乡。\n如：请放心，我会把你的意见反映给学校。",
            "ex_cn": "如：这时人体精力下降，反应减慢，情绪地下，利于人体进入甜美的梦乡。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "2. Còn có thể chỉ phô bày ra bản chất của sự vât.",
            "usage": "如：谈话可以反映一个人的职业特点。\n3.Không thể kết hợp với tân ngữ.\n3.Có thể kết hợp với tân ngữ.\n如：他反应得非常快，一点儿也不用思考。\n如：这个电影反映了中国年轻一代的新变化。\nNgữ pháp HSK 5 Phần 29",
            "ex_cn": "如：谈话可以反映一个人的职业特点。",
            "ex_py": "3.Có thể kết hợp với tân ngữ.",
            "ex_vi": "Ngữ pháp HSK 5 Phần 29",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Động từ, nhấn mạnh chen chúc cùng một chỗ.",
            "usage": "如：坐车的人太多了，我挤了半天才挤上车。\n如：请先下后上，不要拥挤。",
            "ex_cn": "如：坐车的人太多了，我挤了半天才挤上车。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "2. Thông thường làm vị ngữ.",
            "usage": "2.Có thể làm chủ ngữ hoặc tân ngữ.\n如：为了买到票，我挤得满头大汗。\n如：交通拥挤是个大问题。",
            "ex_cn": "如：为了买到票，我挤得满头大汗。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "4. Động từ, chỉ người hoặc vật chen chúc , dồn lại sát một chỗ, hoặc sự việc tập trung/dồn lại trong cùng một lúc.",
            "usage": "如果你的生活先被不重要的事挤满了，那你就无法再装进更大、更重要的事了。",
            "ex_cn": "如果你的生活先被不重要的事挤满了，那你就无法再装进更大、更重要的事了。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Từ kết hợp có thể biểu thị người, sự vật, địa điểm cụ thể nhưng thông thường không thể dùng với thời gian, số lượng.",
            "usage": "如：接近下午一点时，救护车终于赶到了。\n如：他们挤在靠近车窗的地方，脸对脸离得很近。",
            "ex_cn": "如：接近下午一点时，救护车终于赶到了。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "2. Thông thường không thể kết hợp với những từ ngữ biểu thị sự vật trừu tượng.",
            "usage": "如：经过努力，现在我们已越来越接近年初定下的销售目标了。",
            "ex_cn": "如：经过努力，现在我们已越来越接近年初定下的销售目标了。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "3. Phân biệt 轻易và 容易",
            "usage": "轻易\n容易\nGiống\nKhi làm trạng ngữ, đều biểu thị làm không tốn công, khó khăn.\nKhác\n1.Thiên về hành sự thoải mái, không tốn sức lực. Thông thường làm trạng ngữ.\n1.Ngoài biểu thị sự việc rất đơn giản không khó làm, còn biểu thị nội dung sự việc không phức tạp. Có thể độc lập làm vị ngữ.\n如：她从小学习就好，高考时很轻易地考上了名牌大学，接着又读了研究生。\n如：今天的考试特别容易，我半个小时就答完了。",
            "ex_cn": "轻易",
            "ex_py": "Khi làm trạng ngữ, đều biểu thị làm không tốn công, khó khăn.",
            "ex_vi": "Khác",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Từ mang nghĩa tốt",
            "usage": "如：吸烟有害健康，你不阻止他，怎么还鼓励呢？\n如：新产品的研制成功极大地鼓舞了科技人员。",
            "ex_cn": "如：吸烟有害健康，你不阻止他，怎么还鼓励呢？",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "2. Ngữ nghĩa thiên về khích lệ đối phương tham gia vào một hoạt động nào đó. Chủ ngữ thường là người hoặc tổ chức.",
            "usage": "Thường dùng hình thức kiêm ngữ “鼓励某人做某事”",
            "ex_cn": "Thường dùng hình thức kiêm ngữ “鼓励某人做某事”",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "2. Ngữ nghĩa thiên về tinh thần phấn chấn do sự ảnh hưởng nào đó. Chủ ngữ thường là sự vật",
            "usage": "如：近些年，国家越来越鼓励大学生毕业后开办自己的公司。\n如：新的胜利给了全体队员很大的鼓舞。\n3。Không có ý nghĩa và cách dùng này.\n3. Có thể làm tính từ, mô tả sự hưng phấn, phấn khởi.\n如：年初制定的目标顺利实现，取得的成绩令人十分鼓舞。\nNgữ pháp HSK 5 Phần 33",
            "ex_cn": "如：近些年，国家越来越鼓励大学生毕业后开办自己的公司。",
            "ex_py": "3。Không có ý nghĩa và cách dùng này.",
            "ex_vi": "3. Có thể làm tính từ, mô tả sự hưng phấn, phấn khởi.",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Động từ, chỉ lại một lần nữa làm điều tương tự",
            "usage": "如：他们只要一有时间，就会情不自禁的背过头去，反复地啄着羽毛。\n如：我没听清，请你再重复一遍。",
            "ex_cn": "如：他们只要一有时间，就会情不自禁的背过头去，反复地啄着羽毛。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "1. Văn viết hay khẩu ngữ đều có thể sử dụng.",
            "usage": "如：因为跟蒸腾作用有关，这种特殊的提升力就被称为“蒸腾拉力“\n如：她穿衣服总是很特别。",
            "ex_cn": "如：因为跟蒸腾作用有关，这种特殊的提升力就被称为“蒸腾拉力“",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "2. Còn có thể làm phó từ. Ý nghĩa là 格外 “ đặc biệt“.",
            "usage": "如：我特别喜欢学中文，尤其是汉子。\nNgữ pháp HSK 5 Phần 36",
            "ex_cn": "如：我特别喜欢学中文，尤其是汉子。",
            "ex_py": "Ngữ pháp HSK 5 Phần 36",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        },
        {
            "structure": "3. Còn có nghĩa là sắp xếp, xứ lý sự vật.",
            "usage": "如：洗衣机的包装纸箱，既占地方又没什么用，快处理了吧。",
            "ex_cn": "如：洗衣机的包装纸箱，既占地方又没什么用，快处理了吧。",
            "ex_py": "",
            "ex_vi": "",
            "source": "Ngữ-pháp-HSK-5.docx",
            "page": ""
        }
    ],
    "hsk6": [
        {
            "structure": "HSK6 PDF cần OCR",
            "usage": "PDF này mở được nhưng phần nội dung ngữ pháp chỉ xuất hiện dưới dạng ảnh/scanned pages khi trích xuất văn bản. Cần OCR để nhập đầy đủ nội dung HSK6 vào ứng dụng.",
            "ex_cn": "",
            "ex_py": "",
            "ex_vi": "",
            "source": "21天征服新HSK6高级语法.pdf",
            "page": ""
        }
    ]
};
