// Original graded reading prompts for the HSK Mastery app.
// 10 life themes x 10 situations = 100 readings for every supported level.
// Passages are generated locally and do not reproduce third-party articles.

const people = [
    ['小林', 'Tiểu Lâm'], ['安娜', 'Anna'], ['王明', 'Vương Minh'], ['李月', 'Lý Nguyệt'],
    ['大卫', 'David'], ['小美', 'Tiểu Mỹ'], ['张华', 'Trương Hoa'], ['陈雨', 'Trần Vũ'],
    ['刘洋', 'Lưu Dương'], ['美玲', 'Mỹ Linh'],
];

const themes = [
    {
        id: 'daily', icon: '☀', zh: '日常生活', vi: 'Sinh hoạt', place: '在家里', placeVi: 'ở nhà',
        lesson: '提前准备能让生活更轻松', lessonVi: 'chuẩn bị trước giúp cuộc sống nhẹ nhàng hơn',
        situations: [
            ['早上起晚了', 'dậy muộn', '马上洗脸，简单吃了早饭', 'rửa mặt ngay và ăn sáng đơn giản'],
            ['忘了带钥匙', 'quên mang chìa khóa', '给家人打电话，请他们来帮忙', 'gọi cho gia đình nhờ giúp đỡ'],
            ['家里突然停水', 'nhà đột nhiên mất nước', '先用家里的水，再联系物业', 'dùng nước dự trữ rồi liên hệ ban quản lý'],
            ['做饭的时候没有盐了', 'hết muối khi đang nấu ăn', '向邻居借了一点儿盐', 'mượn hàng xóm một ít muối'],
            ['衣服洗完以后下雨了', 'trời mưa sau khi giặt quần áo', '把衣服放在房间里晾干', 'phơi quần áo trong phòng'],
            ['房间太乱，找不到书', 'phòng quá bừa nên không tìm thấy sách', '花十分钟整理桌子和书架', 'dành mười phút dọn bàn và giá sách'],
            ['晚上外面声音很大', 'bên ngoài rất ồn vào buổi tối', '关上窗户并戴上耳塞', 'đóng cửa sổ và đeo nút tai'],
            ['冰箱里的菜坏了', 'rau trong tủ lạnh bị hỏng', '清理冰箱并写下购物清单', 'dọn tủ lạnh và viết danh sách mua sắm'],
            ['家里的灯不亮了', 'đèn trong nhà không sáng', '换了新灯泡并检查电源', 'thay bóng mới và kiểm tra nguồn điện'],
            ['每天都不知道吃什么', 'mỗi ngày đều không biết ăn gì', '周末做好一周的简单菜单', 'lập thực đơn đơn giản cho cả tuần'],
        ],
    },
    {
        id: 'money', icon: '¥', zh: '金钱管理', vi: 'Tiền bạc', place: '在银行附近', placeVi: 'gần ngân hàng',
        lesson: '记账和理性选择可以减少压力', lessonVi: 'ghi chép và lựa chọn hợp lý có thể giảm áp lực',
        situations: [
            ['这个月花的钱太多了', 'tháng này tiêu quá nhiều tiền', '检查账单，减少不需要的东西', 'kiểm tra hóa đơn và giảm những món không cần thiết'],
            ['买东西时发现钱不够', 'không đủ tiền khi mua đồ', '只买最需要的东西', 'chỉ mua thứ cần thiết nhất'],
            ['朋友借钱后一直没还', 'bạn mượn tiền mãi chưa trả', '礼貌地问朋友什么时候方便还钱', 'lịch sự hỏi khi nào bạn có thể trả'],
            ['收到一条奇怪的付款信息', 'nhận được tin nhắn thanh toán lạ', '没有点链接，直接联系银行', 'không bấm liên kết và liên hệ thẳng ngân hàng'],
            ['想买一台很贵的新电脑', 'muốn mua máy tính mới rất đắt', '比较价格并先存三个月的钱', 'so sánh giá và tiết kiệm trước ba tháng'],
            ['工资还没到，房租要交了', 'chưa nhận lương nhưng phải trả tiền thuê nhà', '和房东说明情况并安排日期', 'giải thích với chủ nhà và hẹn ngày trả'],
            ['旅行的预算越来越高', 'ngân sách du lịch ngày càng cao', '选择便宜的交通和住宿', 'chọn phương tiện và chỗ ở rẻ hơn'],
            ['在网上买到了不合适的东西', 'mua phải món không phù hợp trên mạng', '保存订单信息并申请退货', 'lưu thông tin đơn hàng và yêu cầu trả hàng'],
            ['不知道每天的钱花在哪里', 'không biết tiền mỗi ngày đã đi đâu', '用手机记录每一笔花费', 'dùng điện thoại ghi lại từng khoản chi'],
            ['想开始存钱但是总失败', 'muốn tiết kiệm nhưng luôn thất bại', '工资到了以后先存一小部分', 'cất một phần nhỏ ngay sau khi nhận lương'],
        ],
    },
    {
        id: 'work', icon: '▣', zh: '工作职场', vi: 'Công việc', place: '在公司里', placeVi: 'ở công ty',
        lesson: '清楚沟通并安排重点能提高效率', lessonVi: 'giao tiếp rõ ràng và sắp xếp ưu tiên giúp tăng hiệu quả',
        situations: [
            ['第一次开会很紧张', 'căng thẳng trong cuộc họp đầu tiên', '提前写下要说的三个重点', 'viết trước ba ý chính cần nói'],
            ['一天里有太多工作', 'có quá nhiều việc trong một ngày', '按照重要程度安排任务', 'sắp xếp nhiệm vụ theo mức quan trọng'],
            ['同事没有看懂消息', 'đồng nghiệp không hiểu tin nhắn', '当面说明并举了一个例子', 'giải thích trực tiếp và đưa ra ví dụ'],
            ['上班快要迟到了', 'sắp đi làm muộn', '先告诉经理并选择更快的路线', 'báo quản lý và chọn đường nhanh hơn'],
            ['做错了一份重要的报告', 'làm sai một báo cáo quan trọng', '主动说明错误并马上修改', 'chủ động nói rõ lỗi và sửa ngay'],
            ['不知道怎样拒绝额外工作', 'không biết từ chối việc phát sinh', '解释现在的任务和完成时间', 'giải thích nhiệm vụ hiện tại và thời gian hoàn thành'],
            ['在家工作时不能集中注意力', 'không thể tập trung khi làm tại nhà', '关掉通知并设定工作时间', 'tắt thông báo và đặt thời gian làm việc'],
            ['和同事对一个方案有不同意见', 'bất đồng với đồng nghiệp về một phương án', '先听对方的理由，再比较两个方法', 'nghe lý do của đối phương rồi so sánh hai cách'],
            ['面试前非常担心', 'rất lo trước phỏng vấn', '练习自我介绍并了解公司', 'luyện giới thiệu bản thân và tìm hiểu công ty'],
            ['工作很久却没有进步的感觉', 'làm lâu nhưng cảm thấy không tiến bộ', '向经理请教并制定新的目标', 'hỏi ý kiến quản lý và đặt mục tiêu mới'],
        ],
    },
    {
        id: 'study', icon: '书', zh: '学习成长', vi: 'Học tập', place: '在学校里', placeVi: 'ở trường',
        lesson: '小目标和持续练习比临时努力更有效', lessonVi: 'mục tiêu nhỏ và luyện tập đều đặn hiệu quả hơn cố gắng nhất thời',
        situations: [
            ['记不住今天学的新词', 'không nhớ được từ mới học hôm nay', '把新词写进三个简单句子里', 'đưa từ mới vào ba câu đơn giản'],
            ['考试前还有很多内容没看', 'còn nhiều nội dung chưa xem trước kỳ thi', '先复习最重要的部分', 'ôn phần quan trọng nhất trước'],
            ['上课时容易看手机', 'dễ xem điện thoại trong giờ học', '把手机放进书包并打开静音', 'cất điện thoại vào cặp và bật im lặng'],
            ['听中文时觉得说话太快', 'thấy tiếng Trung nói quá nhanh', '先慢速听，再一句一句重复', 'nghe chậm trước rồi lặp từng câu'],
            ['不敢在别人面前说中文', 'không dám nói tiếng Trung trước người khác', '每天和朋友练习五分钟', 'luyện năm phút mỗi ngày với bạn'],
            ['学习计划常常不能完成', 'thường không hoàn thành kế hoạch học', '把每天的任务改得更小', 'chia nhiệm vụ mỗi ngày nhỏ hơn'],
            ['看书的时候很快就累了', 'nhanh mệt khi đọc sách', '学习二十五分钟后休息五分钟', 'học 25 phút rồi nghỉ 5 phút'],
            ['两个语法的用法总是弄错', 'luôn nhầm cách dùng hai ngữ pháp', '做一张比较表并写例句', 'làm bảng so sánh và viết câu ví dụ'],
            ['找不到适合自己水平的文章', 'không tìm được bài phù hợp trình độ', '从短文章开始并记录生词', 'bắt đầu từ bài ngắn và ghi từ mới'],
            ['成绩下降以后没有信心', 'mất tự tin sau khi điểm giảm', '分析错误并请老师给建议', 'phân tích lỗi và xin giáo viên góp ý'],
        ],
    },
    {
        id: 'health', icon: '♥', zh: '健康习惯', vi: 'Sức khỏe', place: '在家休息的时候', placeVi: 'khi nghỉ ở nhà',
        lesson: '关注身体信号并保持规律的习惯很重要', lessonVi: 'chú ý tín hiệu cơ thể và giữ thói quen điều độ rất quan trọng',
        situations: [
            ['最近晚上总是睡不好', 'gần đây luôn ngủ không ngon', '睡前不看手机并早点关灯', 'không xem điện thoại trước ngủ và tắt đèn sớm'],
            ['坐了一天以后腰很疼', 'đau lưng sau khi ngồi cả ngày', '每小时起来走动和伸展', 'mỗi giờ đứng dậy đi lại và giãn cơ'],
            ['早上常常没有时间吃饭', 'buổi sáng thường không có thời gian ăn', '前一天晚上准备简单的早餐', 'chuẩn bị bữa sáng đơn giản từ tối hôm trước'],
            ['天气变化以后感冒了', 'bị cảm sau khi thời tiết thay đổi', '多喝水、休息并按需要看医生', 'uống nhiều nước, nghỉ ngơi và đi khám khi cần'],
            ['工作忙的时候忘了喝水', 'quên uống nước khi công việc bận', '在桌上放水并设置提醒', 'đặt nước trên bàn và cài nhắc nhở'],
            ['很久没有运动，身体容易累', 'lâu không vận động nên cơ thể dễ mệt', '每天晚饭后走路二十分钟', 'đi bộ 20 phút sau bữa tối mỗi ngày'],
            ['吃了太多甜的东西', 'ăn quá nhiều đồ ngọt', '用水果代替一部分甜食', 'thay một phần đồ ngọt bằng trái cây'],
            ['心里有很多压力', 'có nhiều áp lực trong lòng', '和信任的人聊天并安排休息', 'trò chuyện với người tin cậy và sắp xếp nghỉ ngơi'],
            ['眼睛因为看电脑太久而不舒服', 'mắt khó chịu vì nhìn máy tính quá lâu', '定时看远处并调整屏幕', 'định kỳ nhìn xa và chỉnh màn hình'],
            ['想改变生活习惯却坚持不久', 'muốn đổi thói quen nhưng không duy trì lâu', '一次只改变一件小事', 'mỗi lần chỉ thay đổi một việc nhỏ'],
        ],
    },
    {
        id: 'family', icon: '⌂', zh: '家庭相处', vi: 'Gia đình', place: '在家人身边', placeVi: 'bên gia đình',
        lesson: '耐心倾听和表达感谢能让家人更亲近', lessonVi: 'kiên nhẫn lắng nghe và bày tỏ cảm ơn giúp gia đình gần nhau hơn',
        situations: [
            ['因为小事和妈妈吵架了', 'cãi nhau với mẹ vì chuyện nhỏ', '冷静以后主动说出自己的感受', 'bình tĩnh rồi chủ động nói cảm xúc'],
            ['爸爸不会使用新的手机', 'bố không biết dùng điện thoại mới', '一步一步教他常用的功能', 'dạy từng bước các chức năng thường dùng'],
            ['家人吃饭时都在看手机', 'cả nhà đều xem điện thoại lúc ăn', '建议吃饭的半小时不使用手机', 'đề nghị không dùng điện thoại trong nửa giờ ăn'],
            ['很久没有给爷爷奶奶打电话', 'lâu rồi chưa gọi ông bà', '定下每个周日联系的时间', 'đặt lịch liên lạc mỗi Chủ nhật'],
            ['孩子不愿意整理自己的东西', 'trẻ không muốn dọn đồ của mình', '和孩子一起把任务变成小游戏', 'cùng trẻ biến nhiệm vụ thành trò chơi nhỏ'],
            ['家人对工作选择不理解', 'gia đình không hiểu lựa chọn công việc', '认真解释计划和自己的理由', 'nghiêm túc giải thích kế hoạch và lý do'],
            ['节日不知道送什么礼物', 'không biết tặng gì dịp lễ', '回想家人最近真正需要什么', 'nghĩ xem gần đây gia đình thật sự cần gì'],
            ['兄弟姐妹常常使用自己的东西', 'anh chị em thường dùng đồ của mình', '友好地说清楚使用的规则', 'thân thiện nói rõ quy tắc sử dụng'],
            ['家务总是一个人在做', 'việc nhà luôn do một người làm', '开家庭会议并公平分工', 'họp gia đình và chia việc công bằng'],
            ['工作太忙，没有时间陪家人', 'quá bận việc nên không có thời gian cho gia đình', '把每周一个晚上留给家人', 'dành một tối mỗi tuần cho gia đình'],
        ],
    },
    {
        id: 'social', icon: '☻', zh: '朋友关系', vi: 'Quan hệ', place: '和朋友见面的时候', placeVi: 'khi gặp bạn bè',
        lesson: '尊重边界并真诚交流是健康关系的基础', lessonVi: 'tôn trọng ranh giới và trao đổi chân thành là nền tảng quan hệ lành mạnh',
        situations: [
            ['朋友总是约会迟到', 'bạn luôn đến hẹn muộn', '说明等待带来的不便并确认时间', 'nói rõ bất tiện do chờ đợi và xác nhận giờ'],
            ['说错话让朋友不高兴了', 'nói sai khiến bạn không vui', '真诚道歉并认真听朋友说', 'chân thành xin lỗi và lắng nghe bạn'],
            ['到了新城市还没有朋友', 'đến thành phố mới mà chưa có bạn', '参加一个自己喜欢的活动', 'tham gia hoạt động mình yêu thích'],
            ['朋友请自己做不愿意做的事', 'bạn nhờ làm việc mình không muốn', '礼貌拒绝并说明自己的想法', 'lịch sự từ chối và nói suy nghĩ'],
            ['和好朋友联系越来越少', 'liên lạc với bạn thân ngày càng ít', '主动发消息并约一次见面', 'chủ động nhắn tin và hẹn gặp'],
            ['在聚会里不知道说什么', 'không biết nói gì trong buổi gặp mặt', '从简单的问题和共同兴趣开始', 'bắt đầu bằng câu hỏi đơn giản và sở thích chung'],
            ['朋友遇到困难但不想说', 'bạn gặp khó khăn nhưng không muốn nói', '告诉朋友自己愿意随时倾听', 'nói rằng mình luôn sẵn lòng lắng nghe'],
            ['两位朋友之间发生了误会', 'hai người bạn xảy ra hiểu lầm', '分别了解情况，不急着判断', 'tìm hiểu từng bên và không vội phán xét'],
            ['社交活动太多让自己很累', 'quá nhiều hoạt động xã hội khiến mình mệt', '保留独处时间并减少不必要的活动', 'giữ thời gian riêng và giảm hoạt động không cần'],
            ['总是拿自己和别人比较', 'luôn so sánh bản thân với người khác', '记录自己的进步和真正的目标', 'ghi lại tiến bộ và mục tiêu thực sự của mình'],
        ],
    },
    {
        id: 'home', icon: '▱', zh: '住房邻里', vi: 'Nhà ở', place: '在住的小区里', placeVi: 'trong khu nhà đang sống',
        lesson: '及时沟通和了解规则有助于解决住房问题', lessonVi: 'trao đổi kịp thời và hiểu quy định giúp giải quyết vấn đề nhà ở',
        situations: [
            ['楼上的邻居晚上很吵', 'hàng xóm tầng trên rất ồn ban đêm', '礼貌沟通并说明休息时间', 'lịch sự trao đổi và nói rõ giờ nghỉ'],
            ['房间的水管漏水了', 'ống nước trong phòng bị rò', '关掉水并马上联系维修人员', 'khóa nước và gọi thợ sửa ngay'],
            ['房租突然要提高', 'tiền thuê đột nhiên tăng', '查看合同并和房东商量', 'xem hợp đồng và thương lượng với chủ nhà'],
            ['搬家以后有很多箱子', 'có nhiều thùng sau khi chuyển nhà', '按照房间分类，一天整理一点', 'phân loại theo phòng và dọn mỗi ngày một ít'],
            ['邻居把东西放在公共走道', 'hàng xóm để đồ ở lối đi chung', '先友好提醒，再联系管理人员', 'nhắc nhở thân thiện rồi liên hệ quản lý'],
            ['家里的网络常常很慢', 'mạng ở nhà thường rất chậm', '检查设备并向网络公司报告', 'kiểm tra thiết bị và báo nhà mạng'],
            ['房间冬天太冷', 'phòng quá lạnh vào mùa đông', '检查窗户并增加保暖用品', 'kiểm tra cửa sổ và thêm đồ giữ ấm'],
            ['想找一个合适的室友', 'muốn tìm bạn cùng phòng phù hợp', '提前谈生活习惯和费用', 'trao đổi trước về thói quen và chi phí'],
            ['厨房里出现了很多小虫子', 'xuất hiện nhiều côn trùng nhỏ trong bếp', '清理食物并请专业人员检查', 'dọn thức ăn và nhờ người chuyên môn kiểm tra'],
            ['新家离工作地点太远', 'nhà mới quá xa nơi làm việc', '计算每天时间和费用再做决定', 'tính thời gian và chi phí hằng ngày rồi quyết định'],
        ],
    },
    {
        id: 'transport', icon: '➜', zh: '交通出行', vi: 'Đi lại', place: '在去目的地的路上', placeVi: 'trên đường đến nơi cần đến',
        lesson: '留出时间并准备备用方案能减少出行风险', lessonVi: 'chừa thời gian và chuẩn bị phương án dự phòng giúp giảm rủi ro đi lại',
        situations: [
            ['坐错了公共汽车', 'lên nhầm xe buýt', '在下一站下车并重新查路线', 'xuống trạm kế và xem lại đường'],
            ['地铁突然停止运行', 'tàu điện đột nhiên ngừng chạy', '查看通知并换乘公共汽车', 'xem thông báo và đổi sang xe buýt'],
            ['骑车的时候轮胎没气了', 'lốp xe hết hơi khi đang đi', '把车推到附近的修理店', 'dắt xe đến tiệm sửa gần đó'],
            ['去机场的路上堵车了', 'tắc đường trên đường ra sân bay', '联系司机并寻找更快的路线', 'liên hệ tài xế và tìm đường nhanh hơn'],
            ['旅行时找不到自己的行李', 'không tìm thấy hành lý khi du lịch', '保存行李单并向工作人员求助', 'giữ phiếu hành lý và nhờ nhân viên giúp'],
            ['下车以后发现东西忘在车上', 'xuống xe rồi phát hiện quên đồ', '记下车牌和时间并联系失物处', 'ghi biển số, thời gian và liên hệ nơi đồ thất lạc'],
            ['导航把自己带到了错误的地方', 'bản đồ dẫn đến nơi sai', '问当地人并核对地址', 'hỏi người địa phương và kiểm tra địa chỉ'],
            ['大雨让回家的路很危险', 'mưa lớn khiến đường về nguy hiểm', '先在安全的地方等待', 'chờ ở nơi an toàn trước'],
            ['出门以后发现交通卡没钱了', 'ra ngoài mới thấy thẻ giao thông hết tiền', '使用手机付款并马上充值', 'dùng điện thoại thanh toán rồi nạp tiền'],
            ['长途旅行以后身体很累', 'cơ thể mệt sau chuyến đi dài', '安排休息并做简单伸展', 'sắp xếp nghỉ và giãn cơ đơn giản'],
        ],
    },
    {
        id: 'tech', icon: '⌘', zh: '数字生活', vi: 'Công nghệ', place: '在使用手机和电脑的时候', placeVi: 'khi dùng điện thoại và máy tính',
        lesson: '保护信息并有意识地使用技术非常必要', lessonVi: 'bảo vệ thông tin và sử dụng công nghệ có ý thức là rất cần thiết',
        situations: [
            ['手机突然没有电了', 'điện thoại đột nhiên hết pin', '借到充电器并打开省电功能', 'mượn bộ sạc và bật tiết kiệm pin'],
            ['忘记了重要网站的密码', 'quên mật khẩu trang web quan trọng', '通过安全方式重新设置密码', 'đặt lại mật khẩu bằng cách an toàn'],
            ['电脑里的文件找不到了', 'không tìm thấy tệp trong máy tính', '检查回收站和备份文件', 'kiểm tra thùng rác và bản sao lưu'],
            ['收到一个不认识的人发来的链接', 'nhận liên kết từ người lạ', '没有打开链接并删除了消息', 'không mở liên kết và xóa tin nhắn'],
            ['每天看短视频的时间太长', 'mỗi ngày xem video ngắn quá lâu', '设置时间限制并关闭推荐通知', 'đặt giới hạn thời gian và tắt thông báo đề xuất'],
            ['网络会议时听不到声音', 'không nghe được âm thanh khi họp trực tuyến', '检查麦克风和会议设置', 'kiểm tra micro và cài đặt cuộc họp'],
            ['照片太多，手机没有空间了', 'quá nhiều ảnh khiến điện thoại hết chỗ', '删除重复照片并保存到电脑', 'xóa ảnh trùng và lưu vào máy tính'],
            ['在社交网络上看到不真实的消息', 'thấy tin không thật trên mạng xã hội', '查看来源并寻找其他报道', 'kiểm tra nguồn và tìm các bài đưa tin khác'],
            ['软件更新以后不会使用了', 'không biết dùng sau khi phần mềm cập nhật', '阅读帮助说明并学习新功能', 'đọc hướng dẫn và học chức năng mới'],
            ['担心自己的个人信息被别人看到', 'lo thông tin cá nhân bị người khác thấy', '修改隐私设置并开启双重验证', 'đổi cài đặt riêng tư và bật xác minh hai bước'],
        ],
    },
];

const levelIntros = [
    (p, place) => `${p}${place}。`,
    (p, place) => `今天，${p}${place}遇到了一个问题。`,
    (p, place) => `最近，${p}${place}碰到了一件不太顺利的事。`,
];

function buildChinesePassage(person, theme, situation, level, standard) {
    const [problem, , action] = situation;
    const intro = level <= 2 ? levelIntros[level - 1](person, theme.place) : levelIntros[2](person, theme.place);
    const sentences = [intro, `${person}${problem}。`];

    if (level >= 2) sentences.push(`${person}有点儿着急，但是没有马上放弃。`);
    if (level >= 3) sentences.push(`想了一会儿以后，${person}${action}。`);
    else sentences.push(`后来，${person}${action}。`);
    if (level >= 4) sentences.push(`虽然这个办法并不完美，但情况开始变好了。`);
    if (level >= 5) sentences.push(`${person}还把这次经历告诉了朋友，希望他们以后少走弯路。`);
    if (level >= 6) sentences.push(`从这件小事中，${person}发现，解决问题不仅需要行动，也需要保持冷静。`);
    if (level >= 7) sentences.push(`与其一味抱怨外部条件，不如先分析自己能够改变的部分，再寻找合适的帮助。`);
    if (level >= 8) sentences.push(`这种看似普通的经历，也反映出现代生活中效率、责任与个人选择之间常常存在的矛盾。`);
    if (level >= 9) sentences.push(`真正成熟的应对方式并非追求一次性消除所有麻烦，而是在不确定中逐步建立可持续的解决机制。`);
    if (level >= 3) sentences.push(`最后，${person}明白了：${theme.lesson}。`);
    else sentences.push(`最后，问题解决了。`);

    if (standard === 'old' && level >= 4) {
        sentences.splice(-1, 0, `这次经验让${person}以后做事更认真。`);
    }
    return sentences.join('');
}

function buildVietnamesePassage(personVi, theme, situation, level) {
    const [, problemVi, , actionVi] = situation;
    const sentences = [
        `${personVi} ${theme.placeVi} và gặp một vấn đề: ${problemVi}.`,
        `${personVi} ${actionVi}.`,
    ];
    if (level >= 2) sentences.splice(1, 0, `${personVi} hơi lo nhưng không bỏ cuộc.`);
    if (level >= 4) sentences.push('Cách này chưa hoàn hảo, nhưng tình hình bắt đầu tốt hơn.');
    if (level >= 6) sentences.push('Trải nghiệm cho thấy giải quyết vấn đề cần cả hành động và sự bình tĩnh.');
    if (level >= 8) sentences.push('Đây cũng là ví dụ về mâu thuẫn giữa hiệu quả, trách nhiệm và lựa chọn cá nhân trong đời sống hiện đại.');
    if (level >= 3) sentences.push(`Cuối cùng, ${personVi} hiểu rằng ${theme.lessonVi}.`);
    else sentences.push('Cuối cùng, vấn đề đã được giải quyết.');
    return sentences.join(' ');
}

function buildQuestions(person, personVi, theme, situation) {
    const [problem, problemVi, action, actionVi] = situation;
    return [
        {
            prompt: '谁遇到了问题？', promptVi: 'Ai đã gặp vấn đề?',
            options: [person, '老师', '邻居'], answer: 0,
        },
        {
            prompt: `${person}遇到了什么问题？`, promptVi: `${personVi} đã gặp vấn đề gì?`,
            options: [problem, '今天放假了', '收到了一份礼物'], answer: 0,
            explanation: problemVi,
        },
        {
            prompt: `${person}怎么解决问题？`, promptVi: `${personVi} giải quyết thế nào?`,
            options: [action, '什么都没做', '马上离开了'], answer: 0,
            explanation: actionVi,
        },
    ];
}

export const readingThemes = themes.map(({ id, icon, zh, vi }) => ({ id, icon, zh, vi }));

export function getReadings(standard = 'new', level = 1) {
    const maxLevel = standard === 'new' ? 9 : 6;
    const safeLevel = Math.max(1, Math.min(Number(level) || 1, maxLevel));
    const readings = [];

    themes.forEach((theme, themeIndex) => {
        theme.situations.forEach((situation, situationIndex) => {
            const index = themeIndex * 10 + situationIndex;
            const [person, personVi] = people[index % people.length];
            readings.push({
                id: `${standard}-hsk${safeLevel}-${String(index + 1).padStart(3, '0')}`,
                number: index + 1,
                standard,
                level: safeLevel,
                theme: theme.id,
                themeName: theme.vi,
                themeZh: theme.zh,
                icon: theme.icon,
                title: situation[0].replace(/了$/, ''),
                titleVi: situation[1][0].toUpperCase() + situation[1].slice(1),
                text: buildChinesePassage(person, theme, situation, safeLevel, standard),
                translation: buildVietnamesePassage(personVi, theme, situation, safeLevel),
                questions: buildQuestions(person, personVi, theme, situation),
            });
        });
    });

    return readings;
}

export const readingCatalogStats = {
    new: { levels: 9, perLevel: 100, total: 900 },
    old: { levels: 6, perLevel: 100, total: 600 },
    total: 1500,
};
