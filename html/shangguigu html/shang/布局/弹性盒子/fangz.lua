function Main0()
    SN = gg.choice({
         "使用前看一下",
         "怪物移速",
         "全屏攻击",
         "退出脚本",
    }, nil, "不要低练度打过高的关卡，好像这样会稳一点")
    if SN==1 then
         Main16()
    end
    if SN==2 then
         Main1()
    end
    if SN==3 then
         Main10()
    end
    if SN==4 then
         HS14()
    end
    FX1=0
    end
    
    function Main16()
    SN = gg.multiChoice({
         "脚本作者:桜梦",
         "欢迎加入，QQ交流群:873983471",
    }, nil, "")
    if SN[1]==true then
         HS17()
    end
    if SN[2]==true then
         HS18()
    end
    FX1=0
    end
    
    function HS17()
         Main0()
    end
    
    function HS18()
         Main0()
    end
    
    function Main1()
    SN = gg.multiChoice({
         "0（定怪）",
         "0.1",
         "0.2",
         "0.3",
         "1（怪物双倍移速）",
         "2",
         "修改恢复",
         "返回主页",
    }, nil, "每次切换都要开启一次 修改恢复\n\n必须关卡内修改")
    if SN[1]==true then
         HS2()
    end
    if SN[2]==true then
         HS3()
    end
    if SN[3]==true then
         HS4()
    end
    if SN[4]==true then
         HS5()
    end
    if SN[5]==true then
         HS6()
    end
    if SN[6]==true then
         HS7()
    end
    if SN[7]==true then
         HS8()
    end
    if SN[8]==true then
         HS9()
    end
    FX1=0
    end
    
    function HS2()
         gg.clearResults()
         gg.setRanges(32)
         gg.searchNumber("0.5F;99;1~10;1~10;1~10;256::25", gg.TYPE_DWORD, false, gg.SIGN_EQUAL, 0, -1)
         gg.searchNumber("0.5", gg.TYPE_FLOAT, false, gg.SIGN_EQUAL, 0, -1)
         gg.getResults(100)
         gg.editAll("0", gg.TYPE_FLOAT)
         gg.toast("开启成功")
         gg.clearResults()
    end
    
    function HS3()
         gg.clearResults()
         gg.setRanges(32)
         gg.searchNumber("0.5F;99;1~10;1~10;1~10;256::25", gg.TYPE_DWORD, false, gg.SIGN_EQUAL, 0, -1)
         gg.searchNumber("0.5", gg.TYPE_FLOAT, false, gg.SIGN_EQUAL, 0, -1)
         gg.getResults(100)
         gg.editAll("0.1", gg.TYPE_FLOAT)
         gg.toast("开启成功")
         gg.clearResults()
    end
    
    function HS4()
         gg.clearResults()
         gg.setRanges(32)
         gg.searchNumber("0.5F;99;1~10;1~10;1~10;256::25", gg.TYPE_DWORD, false, gg.SIGN_EQUAL, 0, -1)
         gg.searchNumber("0.5", gg.TYPE_FLOAT, false, gg.SIGN_EQUAL, 0, -1)
         gg.getResults(100)
         gg.editAll("0.2", gg.TYPE_FLOAT)
         gg.toast("开启成功")
         gg.clearResults()
    end
    
    function HS5()
         gg.clearResults()
         gg.setRanges(32)
         gg.searchNumber("0.5F;99;1~10;1~10;1~10;256::25", gg.TYPE_DWORD, false, gg.SIGN_EQUAL, 0, -1)
         gg.searchNumber("0.5", gg.TYPE_FLOAT, false, gg.SIGN_EQUAL, 0, -1)
         gg.getResults(100)
         gg.editAll("0.3", gg.TYPE_FLOAT)
         gg.toast("开启成功")
         gg.clearResults()
    end
    
    function HS6()
         gg.clearResults()
         gg.setRanges(32)
         gg.searchNumber("0.5F;99;1~10;1~10;1~10;256::25", gg.TYPE_DWORD, false, gg.SIGN_EQUAL, 0, -1)
         gg.searchNumber("0.5", gg.TYPE_FLOAT, false, gg.SIGN_EQUAL, 0, -1)
         gg.getResults(100)
         gg.editAll("1", gg.TYPE_FLOAT)
         gg.toast("开启成功")
         gg.clearResults()
    end
    
    function HS7()
         gg.clearResults()
         gg.setRanges(32)
         gg.searchNumber("0.5F;99;1~10;1~10;1~10;256::25", gg.TYPE_DWORD, false, gg.SIGN_EQUAL, 0, -1)
         gg.searchNumber("0.5", gg.TYPE_FLOAT, false, gg.SIGN_EQUAL, 0, -1)
         gg.getResults(100)
         gg.editAll("2", gg.TYPE_FLOAT)
         gg.toast("开启成功")
         gg.clearResults()
    end
    
    function HS8()
         gg.clearResults()
         gg.setRanges(32)
         gg.searchNumber("0~2F;99;1~10;1~10;1~10;256::25", gg.TYPE_DWORD, false, gg.SIGN_EQUAL, 0, -1)
         gg.searchNumber("0~2", gg.TYPE_FLOAT, false, gg.SIGN_EQUAL, 0, -1)
         gg.getResults(100)
         gg.editAll("0.5", gg.TYPE_FLOAT)
         gg.toast("恢复成功")
         gg.clearResults()
    end
    
    function HS9()
         Main0()
    end
    
    function Main10()
    SN = gg.multiChoice({
         "全屏攻击1",
         "全屏攻击2",
         "返回主页",
    }, nil, "勾选全屏攻击1，2 开启（主页开启即可）")
    if SN[1]==true then
         HS11()
    end
    if SN[2]==true then
         HS12()
    end
    if SN[3]==true then
         HS13()
    end
    FX1=0
    end
    
    function HS11()
         gg.clearResults()
         gg.setRanges(32)
         gg.searchNumber("4D;-1.5;-0.5;1~4::", gg.TYPE_FLOAT, false, gg.SIGN_EQUAL, 0, -1)
         gg.searchNumber("1~4", gg.TYPE_FLOAT, false, gg.SIGN_EQUAL, 0, -1)
         gg.getResults(100)
         gg.editAll("200", gg.TYPE_FLOAT)
         gg.toast("1开启成功")
         gg.clearResults()
    end
    
    function HS12()
         gg.clearResults()
         gg.setRanges(32)
         gg.searchNumber("4D;-1.5;-0.5", gg.TYPE_FLOAT, false, gg.SIGN_EQUAL, 0, -1)
         gg.searchNumber("-1.5;-0.5", gg.TYPE_FLOAT, false, gg.SIGN_EQUAL, 0, -1)
         gg.getResults(100)
         gg.editAll("-15", gg.TYPE_FLOAT)
         gg.toast("全屏攻击开启成功")
         gg.clearResults()
    end
    
    function HS13()
         Main0()
    end
    
    function HS14()
         os.exit()
    end
    
    
    
    while true do
    if gg.isVisible(true) then
        FX1 = nil
        gg.setVisible(false)
      end
      if FX1 == nil then
        Main0()
      end
    end
    