1.根据确定首字母依次模糊匹配的方式完成了findwordToUse方法。通过该方法找到手中分数最高的单词。并在包中不存在任何字母时输出最后的SCORE。（包含通配符匹配的情况）

2.修改了word-scord-game.css。优化了按钮，文本框，并让游戏界面居中，进行了基本的排版。

3.采用模块化方式，加入require.js，减少js加载时间。另外在successfullyAddedWord方法中不需要调用clearClasses()方法，减少不必要循环。


word-score-game中完成了findwordToUse方法，在getAvailableLetter中加入了BAG_OF_LETTERS.length是否为0的判定条件。wordlist中修改了listCheck方法，新建了fuzzyCheck方法。


具体的注释可在源代码中查看。
