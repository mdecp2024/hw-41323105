var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: https://github.com/mdecp2024/hw-41323105 \n 個人網站: https://mdecp2024.github.io/hw-41323105 \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': '\n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '題目一: \n 請利用 程式一 的原始碼, 分別在自己網站的 Brython 頁面、SciTE 編輯器、命令提示字元視窗、Jupyter Lab 以及 Codespaces 環境中執行, 所完成的操作影片 \n \n 題目二: \n 請問 Python 程式中有關變數的命名, 除了必須以"_", 以及英文大小寫字母開頭之外, 還有甚麼需要特別注意的地方? 與所謂的"關鍵字" 有關係嗎? 請實際舉例, 針對 Python 程式命名的規則編寫程式 \n \n \xa0題目三: \n \xa0 http://mde.tw/cp2024/content/Problem_set.html \xa0中有利用 Python 程式解決物理與微積分的範例流程, 請根據過程中所得到的 Python 程式 \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'Exam234', 'text': 'w16_exam2 \n w16_exam3 \n w16_exam4', 'tags': '', 'url': 'Exam234.html'}, {'title': 'w16_exam2', 'text': '請以 自己的學號最後四碼 作為繪圖的座標原點, (31,05), 並以 pixel=2 的黑色直線分別利用 Brython 繪圖, 標示出向右為正的 X 軸, 以及向下為正的 Y 軸, 並且利用文字標示出原點座標 (31,05), 之後請自選最左側圖形的起始點座標, 直接在頁面畫出下列圖像。 \n 程式碼 \n from browser import html\nfrom browser import document as doc\nimport math\n\n# 建立畫布\ncanvas = html.CANVAS(width=1000, height=200)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\nctx = canvas.getContext("2d")\n\n# 定義左上角為原點，座標(32, 5)\nx, y = 32, 5\n\n# 畫 X 軸 (向右為正)\nctx.beginPath()\nctx.moveTo(32, 5) # 從畫布左側\nctx.lineTo(82, 5) # 畫到右側\nctx.strokeStyle = "black"\nctx.lineWidth = 2\nctx.stroke()\n\n# 畫 Y 軸 (向下為正)\nctx.beginPath()\nctx.moveTo(32, 5) # 從畫布頂部\nctx.lineTo(32, 55) # 畫到底部\nctx.strokeStyle = "black"\nctx.lineWidth = 2\nctx.stroke()\n\n# 標示 (32, 5)\nctx.beginPath()\nctx.arc(x, y, 5, 0, 2 * 3.14159) # 畫一個半徑為5的圓\nctx.fillStyle = "black"\nctx.fill()\n\n# 標示座標文字\nctx.font = "12px Arial"\nctx.fillStyle = "black"\nctx.fillText(f"({x}, {y})", x + 10, y + 15) # 在點旁顯示座標文字\n\n# 外切圓的中心在(90,80)，半徑為40\ncenter_x, center_y = 90,80\nradius = 40\nangle_offset = 0 # 六邊形的起始角度\n\n# 計算六邊形的六個頂點\nvertices = []\nfor i in range(6):\nangle = angle_offset + i * (2 * math.pi / 6) # 每個頂點的角度，60度間隔\nx = center_x + radius * math.cos(angle)\ny = center_y + radius * math.sin(angle)\nvertices.append((x, y))\n\n# 開始畫六邊形\nctx.beginPath()\nctx.moveTo(vertices[0][0], vertices[0][1]) # 開始於第一個頂點\nfor vertex in vertices[1:]:\nctx.lineTo(vertex[0], vertex[1]) # 依次畫出各個邊\nctx.closePath() # 關閉路徑\n\n# 塗色\nctx.fillStyle = "gray"\nctx.fill()\n\n# 畫菱形\ndiamond_center_x, diamond_center_y = 160,80\ndiamond_width = 40 # 菱形的寬度\ndiamond_height = 80 # 菱形的高度\n\ndiamond_vertices = [\n(diamond_center_x, diamond_center_y - diamond_height / 2), # 上頂點\n(diamond_center_x + diamond_width / 2, diamond_center_y), # 右頂點\n(diamond_center_x, diamond_center_y + diamond_height / 2), # 下頂點\n(diamond_center_x - diamond_width / 2, diamond_center_y), # 左頂點\n]\n\n# 開始畫菱形\nctx.beginPath()\nctx.moveTo(diamond_vertices[0][0], diamond_vertices[0][1]) # 開始於上頂點\nfor vertex in diamond_vertices[1:]:\nctx.lineTo(vertex[0], vertex[1]) # 依次畫出各個邊\nctx.closePath() # 關閉路徑\n\n# 塗色\nctx.fillStyle = "lightgreen"\nctx.fill()\n\n# 繪製三角形\nctx.fillStyle = \'orange\'\nctx.beginPath()\nctx.moveTo(185,80) # 第一個頂點\nctx.lineTo(165,120) # 第二個頂點\nctx.lineTo(205,120) # 第三個頂點\nctx.closePath() # 封閉路徑\nctx.fill() # 填充三角形\n\n# 畫圓\ncircle_center_x, circle_center_y = 250,80\ncircle_radius = 40\n\n# 開始畫圓\nctx.beginPath()\nctx.arc(circle_center_x, circle_center_y, circle_radius, 0, 2 * math.pi) # 圓心和半徑\nctx.closePath()\n\n# 塗色\nctx.fillStyle = "lightcoral"\nctx.fill()\n\nctx.fillStyle = \'lightblue\'\nctx.beginPath()\nctx.rect(300,40,80,80) # 填充正方形\nctx.fill()\n\nctx.fillStyle = \'lightpink\'\nctx.beginPath()\nctx.rect(400,65,80,30) # 填充長方形\nctx.fill() \n \n \n \n 啟動Brython \n \n \n \n \n \n \n \n 心得:了解如何運用Brython定義座標及繪製多種圖形，可利用 atctx.closePh() 先關閉出此圖形的封閉區域，再利用 ctx.fillStyle (設定填充圖形顏色或樣式的屬性)和 ctx.fill (填充圖形)。 \n \n', 'tags': '', 'url': 'w16_exam2.html'}, {'title': 'w16_exam3', 'text': '請以 自己的學號最後四碼 作為下列繪圖的左上方點座標, (31,05), 之後請利用\xa0 pixel=2 的藍色直線 ,\xa0 自訂迷宮畫布大小 , 直接在頁面畫出下列圖像。 \n 程式碼 \n from browser import html\nfrom browser import document as doc\n\n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width=400, height=300) # 設定迷宮畫布大小\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 取得 canvas 的繪圖上下文\nctx = canvas.getContext("2d")\n\n# 標示左上方點座標 (31, 05)\nctx.font = "12px Arial"\nctx.fillStyle = "red"\nctx.fillText("(31, 05)", 35, 17)\n\n# 定義藍色線條\nctx.strokeStyle = "blue"\nctx.lineWidth = 2\n\n# 開始繪製迷宮 (座標偏移以 (31, 05) 為起點)\noffset_x = 31\noffset_y = 5\n\n# 繪製迷宮線條\nctx.beginPath()\nctx.moveTo(offset_x + 0, offset_y + 0)\nctx.lineTo(offset_x + 100, offset_y + 0)\nctx.moveTo(offset_x + 150, offset_y + 0)\nctx.lineTo(offset_x + 250, offset_y + 0)\nctx.moveTo(offset_x + 50, offset_y + 50)\nctx.lineTo(offset_x + 200, offset_y + 50)\nctx.moveTo(offset_x + 0, offset_y + 100)\nctx.lineTo(offset_x + 100, offset_y + 100)\nctx.moveTo(offset_x + 50, offset_y + 150)\nctx.lineTo(offset_x + 200, offset_y + 150)\nctx.moveTo(offset_x + 100, offset_y + 200)\nctx.lineTo(offset_x + 150, offset_y + 200)\nctx.moveTo(offset_x + 0, offset_y + 250)\nctx.lineTo(offset_x + 100, offset_y + 250)\nctx.moveTo(offset_x + 150, offset_y + 250)\nctx.lineTo(offset_x + 250, offset_y + 250)\nctx.moveTo(offset_x + 0, offset_y + 0)\nctx.lineTo(offset_x + 0, offset_y + 250)\nctx.moveTo(offset_x + 50, offset_y + 150)\nctx.lineTo(offset_x + 50, offset_y + 200)\nctx.moveTo(offset_x + 100, offset_y + 50)\nctx.lineTo(offset_x + 100, offset_y + 100)\nctx.moveTo(offset_x + 100, offset_y + 200)\nctx.lineTo(offset_x + 100, offset_y + 250)\nctx.moveTo(offset_x + 150, offset_y + 100)\nctx.lineTo(offset_x + 150, offset_y + 150)\nctx.moveTo(offset_x + 200, offset_y + 50)\nctx.lineTo(offset_x + 200, offset_y + 100)\nctx.moveTo(offset_x + 200, offset_y + 150)\nctx.lineTo(offset_x + 200, offset_y + 250)\nctx.moveTo(offset_x + 250, offset_y + 0)\nctx.lineTo(offset_x + 250, offset_y + 250)\n\nctx.stroke() \n \n \n \n \n \n 啟動Brython \n \n \n \n \n \n \n \n 心得:這城市的亮點所在於座標的偏移利用 offset_x 和 offset_y 決定偏移xy軸的位置，再藉由 ctx.moveTo() (將繪圖筆移動到指定的座標)和 ctx.lineTo() (繪圖筆的位置畫一條直線到指定的座標)用來設定繪圖的起始點與終點 再利用 ctx.stroke() 來繪製簡易迷宮。 \n \n', 'tags': '', 'url': 'w16_exam3.html'}, {'title': 'w16_exam4', 'text': '請以 自己的學號最後四碼 作為下列繪圖的左上方點座標(31,05), 之後請利用\xa0 pixel=2 的黑色直線 ,\xa0 自訂迷宮畫布大小 , 直接在頁面畫出下列圖像, 並且 利用紅色連續線段標示從上方入口, 走至下方出口的路線圖 . \n 程式碼 \n from browser import html\nfrom browser import document as doc\n\n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width=400, height=300) # 設定迷宮畫布大小\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 取得 canvas 的繪圖上下文\nctx = canvas.getContext("2d")\n\n# 標示左上方點座標 (31, 05)\nctx.font = "12px Arial"\nctx.fillStyle = "red"\nctx.fillText("(31, 05)", 35, 17)\n\n# 定義藍色線條\nctx.strokeStyle = "blue"\nctx.lineWidth = 2\n\n# 開始繪製迷宮 (座標偏移以 (31, 05) 為起點)\noffset_x = 31\noffset_y = 5\n\n# 繪製迷宮線條\nctx.beginPath()\nctx.moveTo(offset_x + 0, offset_y + 0)\nctx.lineTo(offset_x + 100, offset_y + 0)\nctx.moveTo(offset_x + 150, offset_y + 0)\nctx.lineTo(offset_x + 250, offset_y + 0)\nctx.moveTo(offset_x + 50, offset_y + 50)\nctx.lineTo(offset_x + 200, offset_y + 50)\nctx.moveTo(offset_x + 0, offset_y + 100)\nctx.lineTo(offset_x + 100, offset_y + 100)\nctx.moveTo(offset_x + 50, offset_y + 150)\nctx.lineTo(offset_x + 200, offset_y + 150)\nctx.moveTo(offset_x + 100, offset_y + 200)\nctx.lineTo(offset_x + 150, offset_y + 200)\nctx.moveTo(offset_x + 0, offset_y + 250)\nctx.lineTo(offset_x + 100, offset_y + 250)\nctx.moveTo(offset_x + 150, offset_y + 250)\nctx.lineTo(offset_x + 250, offset_y + 250)\nctx.moveTo(offset_x + 0, offset_y + 0)\nctx.lineTo(offset_x + 0, offset_y + 250)\nctx.moveTo(offset_x + 50, offset_y + 150)\nctx.lineTo(offset_x + 50, offset_y + 200)\nctx.moveTo(offset_x + 100, offset_y + 50)\nctx.lineTo(offset_x + 100, offset_y + 100)\nctx.moveTo(offset_x + 100, offset_y + 200)\nctx.lineTo(offset_x + 100, offset_y + 250)\nctx.moveTo(offset_x + 150, offset_y + 100)\nctx.lineTo(offset_x + 150, offset_y + 150)\nctx.moveTo(offset_x + 200, offset_y + 50)\nctx.lineTo(offset_x + 200, offset_y + 100)\nctx.moveTo(offset_x + 200, offset_y + 150)\nctx.lineTo(offset_x + 200, offset_y + 250)\nctx.moveTo(offset_x + 250, offset_y + 0)\nctx.lineTo(offset_x + 250, offset_y + 250)\n\nctx.stroke()\n\n# 定義紅色線條\nctx.strokeStyle = "red"\nctx.lineWidth = 2\n\n# 開始繪製迷宮入口至出口的路線 (座標偏移以 (31, 05) 為起點)\noffset_x = 31\noffset_y = 5\n\n# 繪製入口至出口的路線線條\nctx.beginPath()\nctx.moveTo(offset_x + 125, offset_y + 0)\nctx.lineTo(offset_x + 125, offset_y + 25)\nctx.moveTo(offset_x + 125, offset_y + 25)\nctx.lineTo(offset_x + 225, offset_y + 25)\nctx.moveTo(offset_x + 225, offset_y + 25)\nctx.lineTo(offset_x + 225, offset_y + 125)\nctx.moveTo(offset_x + 225, offset_y + 125)\nctx.lineTo(offset_x + 175, offset_y + 125)\nctx.moveTo(offset_x + 175, offset_y + 125)\nctx.lineTo(offset_x + 175, offset_y + 75)\nctx.moveTo(offset_x + 175, offset_y + 75)\nctx.lineTo(offset_x + 125, offset_y + 75)\nctx.moveTo(offset_x + 125, offset_y + 75)\nctx.lineTo(offset_x + 125, offset_y + 125)\nctx.moveTo(offset_x + 125, offset_y + 125)\nctx.lineTo(offset_x + 25, offset_y + 125)\nctx.moveTo(offset_x + 25, offset_y + 125)\nctx.lineTo(offset_x + 25, offset_y + 225)\nctx.moveTo(offset_x + 25, offset_y + 225)\nctx.lineTo(offset_x + 75, offset_y + 225)\nctx.moveTo(offset_x + 75, offset_y + 225)\nctx.lineTo(offset_x + 75, offset_y + 175)\nctx.moveTo(offset_x + 75, offset_y + 175)\nctx.lineTo(offset_x + 175, offset_y + 175)\nctx.moveTo(offset_x + 175, offset_y + 175)\nctx.lineTo(offset_x + 175, offset_y + 225)\nctx.moveTo(offset_x + 175, offset_y + 225)\nctx.lineTo(offset_x + 125, offset_y + 225)\nctx.moveTo(offset_x + 125, offset_y + 225)\nctx.lineTo(offset_x + 125, offset_y + 250)\n\nctx.stroke() \n \n \n \n \n \n 啟動Brython \n \n \n \n \n \n \n \n 心得: 這城市的亮點所在於座標的偏移利用 offset_x 和 offset_y 決定偏移xy軸的位置，藉由 ctx.moveTo() (將繪圖筆移動到指定的座標)和 ctx.lineTo() (繪圖筆的位置畫一條直線到指定的座標)用來設定繪圖的起始點與終點再利用 ctx.stroke() 來繪製簡易迷宮和入口至出口的路線圖。 \n \n', 'tags': '', 'url': 'w16_exam4.html'}, {'title': 'w11_hw', 'text': '題目一: \n 已知可以用 Python 程式 由上往下列印三角形 * , 或 由左往右列印三角形 * , 請將此程式延伸到可以在 10x10 的字元區域中, 以 "*" 字元列印出圓型區域. 完成後請將程式碼存入個人 Gist 後, 直接在個人作業網站中的 Brython 頁面中執行.  \n 程式碼題目一 \n # 引入數學模組，用於計算平方根\nimport math\n\n# 設定圖案的大小 (寬度和高度)，此處為 10x10\nsize = 10\n# 計算圓的半徑，將圖案的大小整除 2，得到半徑為 5\nradius = size // 2\n# 計算圓心的位置，減去 0.5 讓圓心更居中\ncenter = radius - 0.5\n\n# 外層迴圈：逐行處理圖案，`y` 表示行數\nfor y in range(size):\n# 內層迴圈：逐列處理圖案，`x` 表示列數\nfor x in range(size):\n# 計算當前點 (x, y) 到圓心的距離\n# 使用歐幾里得距離公式 sqrt((x - center)^2 + (y - center)^2)\ndistance = math.sqrt((x - center) ** 2 + (y - center) ** 2)\n# 如果該點距離圓心的距離小於或等於半徑，則在該點畫星號\nif distance <= radius:\nprint(" * ", end="") # end="" 是為了不換行\nelse:\n# 如果該點距離圓心的距離大於半徑，則在該點畫空白\nprint(" ", end="")\n# 每處理完一行，換行到下一行\nprint()\n\n \n \n 心得:利用ChatGPT查詢運用"*" 如何運用 字元列印出圓型區域，在進入Brython進行排列組合之操作實證出結論，也讓我更加認知ChatGPT的運用方式及運用範圍如此廣大。 \n \n \n 題目二: \n 已知可以在網頁中利用 Brython 繪製方格與塗色, 如下連結, 請設法修改此一程式, 直接將程式存入個人的 Gist, 並利用黑色方塊圍出一個圓形區域. \n 程式碼題目二 \n from browser import html\nfrom browser import document as doc\n\n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width=400, height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 每一格的 pixel 數\ngs = 20\n# 圓心位置和半徑\ncenter = (5, 5) # 圓心在 (5, 5)\nradius = 5 # 半徑為 5\n# 每個格子大小是 gs*gs，畫布大小是 10x10 格\n\nctx = canvas.getContext("2d")\n\n# 畫矩形框線\ndef dRect(lux, luy, w, h, s=1, c=\'#ff0000\'):\nctx.lineWidth = s\nctx.strokeStyle = c\nctx.beginPath()\nctx.rect(lux, luy, w, h)\nctx.stroke()\n\n# 畫格子\ndef grid(width, height, grid_pix):\nfor i in range(width):\nfor j in range(height):\ndRect(i * grid_pix, j * grid_pix, grid_pix, grid_pix, 1, "lightgrey")\n\n# 填充顏色\ndef fill(x, y, color):\nctx.fillStyle = color\nctx.fillRect(x, y, gs, gs)\n\n# 繪製圓形\ndef drawCircle(center, radius, gs):\nfor y in range(10): # 10格高\nfor x in range(10): # 10格寬\n# 計算每個格子是否在圓內部\ncx = x + 0.5 # 每個格子的中心 x 座標\ncy = y + 0.5 # 每個格子的中心 y 座標\ndist = ((cx - center[0]) ** 2 + (cy - center[1]) ** 2) ** 0.5\n# 如果距離圓心小於或等於半徑，填充黑色\nif dist <= radius:\nfill(x * gs, y * gs, "black")\n\n# 繪製格子和圓形\ngrid(10, 10, gs)\ndrawCircle(center, radius, gs) \n \n \n 心得:運用ChatGPT查詢如何利用黑色方塊圍出一個圓形區域 \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': 'Brython 以及 Jupyter lab \xa0環境, 執行 可攜程式 \xa0notebook 目錄中的\xa0 01_string_input_print.ipynb 至\xa010_for_search.ipynb \xa0筆記本程式, 完成後請將能在 Brython 執行的程式碼存入個人\xa0 Gist \xa0。 \n 04_list_append_remove\xa0 \n 程式碼-04 \n \n # 初始化設定一個包含 "carrots"、"chocolate"和 "olives"的購物清單\nshopping_list = ["carrots", "chocolate", "olives"]\n\n# 顯示當前的購物清單\nprint(shopping_list)\n\n# 使用 input() 函式讓用戶輸入要購買的物品\nnew_item = input("What else do I have to buy?")\n\n# 檢查用戶輸入的物品是否已經在購物清單中\nif new_item in shopping_list:\n# 如果物品已經在清單中，顯示提示訊息\nprint(new_item + " is/are already in the shopping list")\n# 顯示目前的購物清單\nprint(shopping_list)\nelse:\n# 如果物品不在清單中，將其添加到清單中\nshopping_list.append(new_item)\n# 顯示更新後的購物清單\nprint(shopping_list)\n# 問用戶是否要移除某個物品\nitem_to_remove = input("What do I have to remove?")\n\n# 檢查用戶輸入的物品是否在購物清單中\nif item_to_remove in shopping_list:\n# 如果該物品在清單中，將其從清單中移除\nshopping_list.remove(item_to_remove)\n# 顯示移除後的購物清單\nprint(shopping_list)\nelse:\n# 如果該物品不在清單中，顯示提示訊息\nprint(item_to_remove + " is/are not in the list")\n# 顯示仍然保留的購物清單\nprint(shopping_list) \n 心得:這程式可主要由.append()新增和.remove()刪除來呈現出購買清單的增減，再運用print()去輸入及更新資訊。 \n \n 05_list_index_pop_insert \n 程式碼-05 \n \n # 定義當日的菜單，包含三個項目\ntodays_menu = ["burger", "salad", "coke"]\n# 顯示原始菜單\nprint(todays_menu)\n\n# 找出 "salad" 的索引位置\nside_dish_index = todays_menu.index("salad")\n# 顯示出 "salad" 的索引位置\nprint(side_dish_index)\n\n# 根據索引 "salad" 從菜單中刪除\ntodays_menu.pop(side_dish_index)\n# 顯示刪除 "salad" 後的菜單\nprint(todays_menu)\n\n# 在原來的索引位置插入新的配菜 "fries"\ntodays_menu.insert(side_dish_index, "fries")\n# 顯示更新後的菜單\nprint(todays_menu) \n 心得: \n \n 06_list_slicing.ipynb \n 程式碼-06 \n \n # 定義出城市列表\ncities = ["San Diego", "Prague", "Cape Town", "Tokyo", "Melbourne"]\n\n# 顯示完整的城市列表\nprint(cities)\n\n# 顯示列表中索引為 1 的城市（第二個城市）\nprint(cities[1]) # 輸出: "Prague"\n\n# 顯示索引 1 到 3（不包括索引 4）的城市\nprint(cities[1:4]) # 輸出: ["Prague", "Cape Town", "Tokyo"]\n\n# 顯示索引 1 到 3 的城市，間隔 2（步長為 2）\nprint(cities[1:4:2]) # 輸出: ["Prague", "Tokyo"]\n\n# 顯示索引 0 到 2（不包括索引 3）的城市\nprint(cities[0:3]) # 輸出: ["San Diego", "Prague", "Cape Town"]\n\n# 顯示從起始到索引 2（不包括索引 3）的城市，省略起始索引\nprint(cities[:3]) # 輸出: ["San Diego", "Prague", "Cape Town"]\n\n# 顯示索引 2 到 4（不包括索引 5）的城市\nprint(cities[2:5]) # 輸出: ["Cape Town", "Tokyo", "Melbourne"]\n\n# 顯示從索引 2 到結尾的城市\nprint(cities[2:]) # 輸出: ["Cape Town", "Tokyo", "Melbourne"]\n\n# 顯示索引 0 到 4（不包括索引 5）的城市，間隔 2（步長為 2）\nprint(cities[0:5:2]) # 輸出: ["San Diego", "Cape Town", "Melbourne"]\n\n# 顯示整個列表，間隔 2（步長為 2）\nprint(cities[::2]) # 輸出: ["San Diego", "Cape Town", "Melbourne"]\n\n# 顯示索引為 4 的城市（最後一個城市）\nprint(cities[4]) # 輸出: "Melbourne"\n\n# 使用負索引顯示最後一個城市\nprint(cities[-1]) # 輸出: "Melbourne"\n\n# 使用負索引顯示索引 -4 到 -1（不包括索引 -1）的城市\nprint(cities[-4:-1]) # 輸出: ["Prague", "Cape Town", "Tokyo"]\n\n# 逆向切片：顯示索引 3 到 1 的城市，按逆序排列\nprint(cities[3:0:-1]) # 輸出: ["Tokyo", "Cape Town", "Prague"]\n\n# 使用負索引逆向切片：顯示索引 -2 到 -5 的城市，按逆序排列\nprint(cities[-2:-5:-1]) # 輸出: ["Tokyo", "Cape Town", "Prague"]\n\n# 使用步長 -1 顯示整個列表，按逆序排列\nprint(cities[::-1]) # 輸出: ["Melbourne", "Tokyo", "Cape Town", "Prague", "San Diego"] \n 說明:這範例程式在說明了索引存取與切篇操作的運用， 索引存取單一元素， 切片選擇多個元素， 使用步長調整選擇模式（正向或逆向）， 省略部分參數進行靈活操作。 \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13_hw', 'text': '請在下列圖形中的兩個正方形外圍,\xa0 並設法在各線條所圍成的封閉區域塗上不同顏色. \n 程式碼 \n \n \n \n \n 啟動Brython \n \n \n \n \n from browser import html\nfrom browser import document as doc\ncanvas = html.CANVAS(width=400,height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\nctx=canvas.getContext("2d")\n\nctx.fillStyle = \'green\' # 綠色\nctx.beginPath()\nctx.rect(10,10,100,100,) # 填充第二個正方形\nctx.fill()\n\nctx.fillStyle = \'yellow\'\nctx.beginPath()\nctx.rect(60,60,100,100) # 填充第二個正方形\nctx.fill()\n\nctx.fillStyle = \'blue\'\nctx.beginPath()\nctx.rect(60,60,50,50) # 填充第二個正方形\nctx.fill()\n\n# 繪製三角形\nctx.fillStyle = \'orange\'\nctx.beginPath()\nctx.moveTo(10, 10) # 第一個頂點\nctx.lineTo(110, 110) # 第二個頂點\nctx.lineTo(110, 10) # 第三個頂點\nctx.closePath() # 封閉路徑\nctx.fill() # 填充三角形\n\n# 繪製三角形\nctx.fillStyle = \'pink\'\nctx.beginPath()\nctx.moveTo(60, 60) # 第一個頂點\nctx.lineTo(110, 60) # 第二個頂點\nctx.lineTo(110, 110) # 第三個頂點\nctx.closePath() # 封閉路徑\nctx.fill() # 填充三角形\n\n\nctx.lineWidth = 1\nctx.strokeStyle = \'blue\'\nctx.beginPath()\nctx.moveTo(10,10)\nctx.lineTo(110,110)\nctx.stroke()\nctx.lineWidth = 1\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.moveTo(10,10)\nctx.lineTo(10,110)\nctx.stroke()\nctx.lineWidth = 1\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.moveTo(10,10)\nctx.lineTo(110,10)\nctx.stroke()\nctx.lineWidth = 1\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.moveTo(110,10)\nctx.lineTo(110,110)\nctx.stroke()\nctx.lineWidth = 1\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.moveTo(10,110)\nctx.lineTo(110,110)\nctx.stroke()\nctx.lineWidth = 1\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.moveTo(60,60)\nctx.lineTo(60,160)\nctx.stroke()\nctx.lineWidth = 1\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.moveTo(60,60)\nctx.lineTo(160,60)\nctx.stroke()\nctx.lineWidth = 1\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.moveTo(160,160)\nctx.lineTo(160,60)\nctx.stroke()\nctx.lineWidth = 1\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.moveTo(160,160)\nctx.lineTo(60,160)\nctx.stroke() \n \n \n \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w13_ai', 'text': '請在下列圖形中的兩個正方形外圍, 以黑色畫筆畫圓, 並設法在各線條所圍成的封閉區域塗上不同顏色. \n 程式碼 \n \n \n \n \n 啟動Brython \n \n \n \n \n from browser import html\nfrom browser import document as doc\n# 初始化畫布\ncanvas = html.CANVAS(width=600, height=600)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\nctx = canvas.getContext("2d")\n\n# 第一個圓分成四個顏色\n# 畫圓的四個扇形區域\n\n# 第一個扇形 (藍色)\nctx.fillStyle = \'blue\'\nctx.beginPath()\nctx.moveTo(200, 200) # 圓心\nctx.arc(200, 200, 141.4, 3.14/4, 3*3.14/4) # 第一個扇形，範圍 45 到 135 度\nctx.closePath()\nctx.fill()\n\n# 第二個扇形 (紅色)\nctx.fillStyle = \'red\'\nctx.beginPath()\nctx.moveTo(200, 200) # 圓心\nctx.arc(200, 200, 141.4, 3*3.14/4, 5*3.14/4) # 第二個扇形，範圍 135 到 225 度\nctx.closePath()\nctx.fill()\n\n# 第三個扇形 (綠色)\nctx.fillStyle = \'green\'\nctx.beginPath()\nctx.moveTo(200, 200) # 圓心\nctx.arc(200, 200, 141.4, 5*3.14/4, 7*3.14/4) # 第三個扇形，範圍 225 到 315 度\nctx.closePath()\nctx.fill()\n\n# 第四個扇形 (黃色)\nctx.fillStyle = \'yellow\'\nctx.beginPath()\nctx.moveTo(200, 200) # 圓心\nctx.arc(200, 200, 141.4, 7*3.14/4,3.14/4) # 第四個扇形，範圍 315 到 45 度\nctx.closePath()\nctx.fill()\n\n# 第一個扇形 (藍色)\nctx.fillStyle = \'lightblue\'\nctx.beginPath()\nctx.moveTo(300, 300) # 圓心\nctx.arc(300, 300, 141.4, 3.14/4, 3*3.14/4) # 第一個扇形，範圍 45 到 135 度\nctx.closePath()\nctx.fill()\n\n# 第二個扇形\nctx.fillStyle = \'purple\'\nctx.beginPath()\nctx.moveTo(300, 300) # 圓心\nctx.arc(300, 300, 141.4, 3*3.14/4, 5*3.14/4) # 第二個扇形，範圍 135 到 225 度\nctx.closePath()\nctx.fill()\n\n# 第三個扇形\nctx.fillStyle = \'gray\'\nctx.beginPath()\nctx.moveTo(300, 300) # 圓心\nctx.arc(300, 300, 141.4, 5*3.14/4, 7*3.14/4) # 第三個扇形，範圍 225 到 315 度\nctx.closePath()\nctx.fill()\n\n# 第四個扇形\nctx.fillStyle = \'brown\'\nctx.beginPath()\nctx.moveTo(300, 300) # 圓心\nctx.arc(300, 300, 141.4, 7*3.14/4,3.14/4) # 第四個扇形，範圍 315 到 45 度\nctx.closePath()\nctx.fill()\n\nctx.fillStyle = \'pink\'\nctx.beginPath()\nctx.rect(100, 100, 200, 200) # 填充第一個正方形\nctx.fill()\n\nctx.fillStyle = \'lightgreen\' # 綠色\nctx.beginPath()\nctx.rect(200, 200, 200, 200) # 填充第二個正方形\nctx.fill()\n\nctx.fillStyle = \'orange\' # 橘色\nctx.beginPath()\nctx.rect(200, 200,100, 100) # 填充第二個正方形\nctx.fill()\n\n# 畫線條\nctx.lineWidth = 3\nctx.strokeStyle = \'blue\'\nctx.beginPath()\nctx.moveTo(100, 100)\nctx.lineTo(300, 300)\nctx.stroke()\n\n# 畫正方形\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.rect(100, 100, 200, 200) # 第一個正方形\nctx.rect(200, 200, 200, 200) # 第二個正方形\nctx.stroke()\n\n# 畫圓\nctx.strokeStyle = \'black\'\nctx.beginPath()\nctx.arc(200, 200, 141.4, 0, 2 * 3.14) # 第一個圓\nctx.stroke()\n\nctx.beginPath()\nctx.arc(300, 300, 141.4, 0, 2 * 3.14) # 第二個圓\nctx.stroke() \n \n \n \n', 'tags': '', 'url': 'w13_ai.html'}, {'title': 'w14', 'text': '請根據兩個圓繪圖所圍成的 區域 (目前圍成三個區域, 但若圓心移動可能彼此獨立)進行不同顏色著色, 條件是當各圓半徑與圓心座標變動時, 程式只需輸入兩個圓的圓心座標與半徑, 就可以完成各區域的著色任務. \n 程式碼 \n from browser import html\nfrom browser import document as doc\nimport random\nimport math\n\n# 初始化畫布\ndef initialize_canvas(canvas_width=400, canvas_height=400, id="brython_div1"):\n    canvas = html.CANVAS(width=canvas_width, height=canvas_height)\n    brython_div = doc[id]\n    brython_div <= canvas\n    ctx = canvas.getContext("2d")\n    return canvas, ctx\n\n# 隨機顏色生成器\ndef random_color_generator():\n    r = random.randint(0, 255)\n    g = random.randint(0, 255)\n    b = random.randint(0, 255)\n    return f"rgb({r}, {g}, {b})"\n\n# 判斷點是否在圓內\ndef is_point_in_circle(px, py, cx, cy, r):\n    return (px - cx) ** 2 + (py - cy) ** 2 <= r ** 2\n\n# 繪製三個圓形，並填充交集區域\ndef draw_circles(x1, y1, r1, x2, y2, r2, x3, y3, r3):\n    # 初始化畫布，創建並取得畫布和其 2D 上下文\n    canvas, ctx = initialize_canvas(400, 400)\n    \n    # 清空畫布\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n    \n    # 顏色區域存儲字典\n    color_dict = {}\n    \n    # 使用掃描線方法填充區域，逐行掃描畫布上的每個像素\n    for py in range(0, canvas.height):\n        for px in range(0, canvas.width):\n            in_circle1 = is_point_in_circle(px, py, x1, y1, r1)  # 判斷點是否在圓1內\n            in_circle2 = is_point_in_circle(px, py, x2, y2, r2)  # 判斷點是否在圓2內\n            in_circle3 = is_point_in_circle(px, py, x3, y3, r3)  # 判斷點是否在圓3內\n            \n            # 判斷當前點屬於哪個區域，並選擇相應顏色\n            if in_circle1 and in_circle2 and in_circle3:\n                if "all_three" not in color_dict:\n                    color_dict["all_three"] = random_color_generator()\n                current_color = color_dict["all_three"]\n            elif in_circle1 and in_circle2:\n                if "circle1_and_2" not in color_dict:\n                    color_dict["circle1_and_2"] = random_color_generator()\n                current_color = color_dict["circle1_and_2"]\n            elif in_circle2 and in_circle3:\n                if "circle2_and_3" not in color_dict:\n                    color_dict["circle2_and_3"] = random_color_generator()\n                current_color = color_dict["circle2_and_3"]\n            elif in_circle1 and in_circle3:\n                if "circle1_and_3" not in color_dict:\n                    color_dict["circle1_and_3"] = random_color_generator()\n                current_color = color_dict["circle1_and_3"]\n            elif in_circle1:\n                if "circle1" not in color_dict:\n                    color_dict["circle1"] = random_color_generator()\n                current_color = color_dict["circle1"]\n            elif in_circle2:\n                if "circle2" not in color_dict:\n                    color_dict["circle2"] = random_color_generator()\n                current_color = color_dict["circle2"]\n            elif in_circle3:\n                if "circle3" not in color_dict:\n                    color_dict["circle3"] = random_color_generator()\n                current_color = color_dict["circle3"]\n            else:\n                current_color = "white"  # 背景顏色設為白色\n            \n            # 填充當前像素\n            ctx.fillStyle = current_color\n            ctx.fillRect(px, py, 1, 1)\n\n# 設定三個圓心和半徑\nx1, y1, r1 = 150, 200, 100  # 圓1：圓心 (150, 200)，半徑 100\nx2, y2, r2 = 250, 200, 100  # 圓2：圓心 (250, 200)，半徑 100\nx3, y3, r3 = 200, 100, 100  # 圓3：圓心 (200, 100)，半徑 100\n\n# 呼叫畫圓函式，並繪製三個圓\ndraw_circles(x1, y1, r1, x2, y2, r2, x3, y3, r3)\n \n \n \n \n \n \n \n 啟動Brython \n \n \n', 'tags': '', 'url': 'w14.html'}, {'title': 'w15', 'text': '題目一:  請利用 Gist 與 Brython 程式環境,\xa0 以"從 1 累加到 100"作為 anchor 的連結標題, 使用者點擊該連結之後, 可從各自的 Brython 頁面執行程式. \n \n 從 1 累加到 100 \n # sum 初始值設為 0\nsum = 0\ninit = 1\nupto = 100\n# 利用 for 重複迴圈與變數加法進行累加\nfor i in range(init, upto+1):\nsum = sum + i\nprint("從" + str(init) + "累加到" + str(upto) + "=" + str(sum)) \n 執行過程: \n \n \n 變數初始化： \n \n 設定變數\xa0 sum \xa0的初始值為\xa0 0 ，用於存放累加的結果。 \n 設定 init = 1\xa0和\xa0 upto = 100 ，分別作為累加的起始值與結束值。 \n \n \n \n for 迴圈執行： \n \n 使用 for i in range(init, upto+1)，範圍是從\xa0 1 \xa0到\xa0 100 （包含\xa0 100 ）。 \n 每次迴圈執行時， i \xa0會依序取值\xa0 1, 2, 3, ..., 100 。 \n 每次將\xa0 i \xa0的值加到\xa0sum\xa0上，更新\xa0 sum \xa0的值。 \n \n \n \n 累加的過程： \n \n 第一次迴圈：sum \xa0= 0 + 1 = 1 \n 第二次迴圈：sum \xa0= 1 + 2 = 3 \n 第三次迴圈：sum \xa0= 3 + 3 = 6 \n 最後一次迴圈：sum \xa0= 4950 + 100 = 5050 \n \n \n \n 結果輸出： \n \n 使用\xa0 print \xa0輸出累加結果 \n \n \n \n A ns: \n 從 1 累加到 100的總合 是: 5050 \n 心得: \n 可熟悉變數的初始化與累加運算，和迴圈的運作。 \n 題目二:  延伸上題, 設計一個函式 addto(1, 100), 可以完成上述的累加結果.\xa0 \n addto \n # 定義 addto 函式\ndef addto(start, end):\ntotal = sum(range(start, end + 1)) # 使用 range() 函式生成範圍，並用 sum() 進行累加\nreturn total\n\n# 呼叫 addto 函式，並計算 1 到 100 的總和\nresult = addto(1, 100)\n\n# 顯示結果\nprint(f"從 1 到 100 的總和是：{result}") \n 執行過程: \n \n \n 定義函式： \n \n 使用 def addto(start, end)\xa0定義一個函式，函式的參數為  start \xa0和  end 。 \n 函式內部使用 range(start, end + 1)\xa0產生從 start\xa0到\xa0end（包含 end）的數字範圍。 \n 利用 sum()\xa0函式將範圍內的數字累加，並將結果存入變數  total 。 \n 最後\xa0 return \xa0累加結果。 \n \n \n \n 呼叫函式： \n \n 呼叫函式 a ddto(1, 100) 。 \n 函式執行時，會計算從  1  到  100  的總和，並將結果存入變數 result。 \n \n \n \n Ans: \n 從 1 到 100 的總和是：5050 \n 心得: \n 可了 解range中的start和end的運用，再結合addto計算出結果 。 \n \n \n 題目三:  延伸上題, 設計一個函式 add_only_even(1, 100), 可以完成從第一個輸入整數, 累加到第二個輸入變數的累加結果.\xa0 \n add_only_even \n def add_only_even(start, end):\n    # 使用列表推導式篩選範圍內的偶數\n    even_numbers = [num for num in range(start, end + 1) if num % 2 == 0]\n    \n    # 計算偶數的總和\n    total = sum(even_numbers)\n    \n    return total\n\n# 呼叫函式，計算從 1 到 100 的偶數總和\nresult = add_only_even(1, 100)\n\n# 顯示結果\nprint(f"從 1 到 100 的偶數總和是：{result}")\n \n 執 行過程: \n \n \n 定義函式 add_only_even： \n \n 接受兩個參數： start 和  end。 \n 使用列表推導式篩選範圍內的偶數：\n \n range(start, end + 1) 會生成從  start \xa0到  end （包含  end ）的數字序列。 \n \xa0if num % 2 == 0 篩選偶數。 \n \n \n 使用  sum() \xa0函數計算列表中所有偶數的總和：\n \n \xa0total = sum(even_numbers) \n \n \n 返回計算結果 total。 \n \n \n \n 呼叫函式 add_only_even(1, 100)： \n \n 將範圍設為從 1 到 100，函式會自動篩選 2、4、6、...、100 的偶數，並計算總和。 \n \n \n \n 顯示結果： \n \n 使用  print() \xa0函式輸出偶數總和。 \n \n \n \n Ans: \n 從 1 到 100 的偶數總和是：2550 \n 心得: \n 延伸第二題了解start和end 的運用在運用if num % 2 == 0\xa0\xa0篩選出偶數後避開，再進行運算。 \n \n 題 目四:  延伸上題, 設計一個函式 add_avoid_8(1, 100), 可以完成從第一個輸入整數, 累加到第二個輸入變數的累加過程, 必須避開數字出現"8"的整數,\xa0 \n add_avoid_8 \n def add_avoid_8(start, end):\n# 初始化總和\ntotal = 0\n\n# 遍歷範圍內的每個數字\nfor num in range(start, end + 1):\n# 檢查數字是否包含 \'8\'\nif \'8\' not in str(num):\ntotal += num # 如果不包含 \'8\'，則累加此數字\n\nreturn total\n\n# 呼叫函式，計算從 1 到 100，避開包含 \'8\' 的數字\nresult = add_avoid_8(1, 100)\n\n# 顯示結果\nprint(f"從 1 到 100，避開包含 \'8\' 的數字的總和是：{result}") \n 執行過程: \n \n \n \n 定義函式\xa0add_avoid_8： \n \n 接受兩個參數：start和end。 \n 初始化變數\xa0total \xa0= 0 ，用於儲存範圍內避開包含數字 \'8\' 的總和。 \n \n \n \n 迴圈篩選數字： \n \n 使用 for num in range(start, end + 1)\xa0遍歷從 start到end\xa0的每個數字（包含  end ）。 \n 將數字轉換為字串，檢查字串中是否不包含字符  \'8\' ：\n \n if \'8\' not in str(num):  \n \n \n 若條件成立（數字不包含 \'8\'），則將該數字加入總和：\n \n total += num \n \n \n \n \n \n 返回結果： \n \n 迴圈結束後，返回累加的結果 total。 \n \n \n \n 呼叫函式： \n \n 設定範圍為從 1 到 100，呼叫函式 add_avoid_8(1, 100)\xa0計算結果。 \n \n \n \n \n \n Ans: \n 從 1 到 100，避開包含 \'8\' 的數字的總和是：3763 \n 心得: \n 利用 if \'8\' not in str(num)用來檢查數字有無包含8的函數，再利用total += num計算該部包 含8的倍數之總和。 \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束  \n \n  ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n cp2024/content/Brython.html  \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}]};