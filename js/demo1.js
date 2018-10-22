import '../sass/demo1.scss'
let sle = window.getSelection()
let $strong=$('strong')
let $parent=$('.selected')
let $selected2=$('.selected2')
let reg=/^(http:\/\/|https:\/\/)(\w|\d){1,}(\.ximalaya\.com){1}/
// 获取选区
$('.getSle').on('click', function(e) {
    console.log(sle)
});
// addRange
$('.addRange').on('click', function(e) {
    if (sle.rangeCount > 0) {
        sle.removeAllRanges()
    }
    let range = document.createRange();
    range.selectNode($strong[0]);
    sle.addRange(range);
});
// collapse
$('.collapse').on('click', function(e) {
    sle.collapse($strong[0]);
});
// collapseToEnd
$('.collapseToEnd').on('click', function () {
    sle.collapseToEnd()
});
// collapseToStart
$('.collapseToStart').on('click', function () {
    sle.collapseToStart()
});
// containsNode
$('.containsNode').on('click', function () {
    console.log(sle.containsNode($strong[0],true))
});
// deleteFromDocument
$('.deleteFromDocument').on('click', function () {
    sle.deleteFromDocument()
});
// extend(node, offset)
$('.extend').on('click', function () {
    sle.extend($strong[0])
});
// getRangeAt(index)
$('.getRangeAt').on('click', function () {
    let ranges=[]
    for (let index = 0; index < sle.rangeCount; index++) {
        const element = sle.getRangeAt(index);
        ranges.push(element)
    }
    console.log(ranges)
});
// selectAllChildren
$('.selectAllChildren').on('click', function () {
    sle.selectAllChildren($parent[0])
});
// setBaseAndExtent
$('.setBaseAndExtent').on('click', function () {
    // sle.setBaseAndExtent($strong[0],0,$selected2[0],0)
    sle.setBaseAndExtent($strong[0],0,$strong[0],0)
});
// toString
$('.toString').on('click', function () {
    console.log(sle.toString())
});
/**
|--------------------------------------------------
| range对象
|--------------------------------------------------
*/
// getrange
$('.getrange').on('click', function () {
    let range=sle.getRangeAt(0)
    console.log(range)
});
// Range.cloneContents()
$('.cloneContents').on('click', function () {
    let range=sle.getRangeAt(0)
    let dom=range.cloneContents()
    $('.richText1').append(dom);
});
// Range.cloneRange()
$('.cloneRange').on('click', function () {
    let range=sle.getRangeAt(0)
    let cRange=range.cloneRange()
    console.log(cRange)
});
// Range.collapse()
$('.Rcollapse').on('click', function () {
    let range=sle.getRangeAt(0)
    range.collapse(false)
    console.log(range)
});
// compareBoundaryPoints
$('.compareBoundaryPoints').on('click', function () {
    let range=sle.getRangeAt(0)
    let cRange=range.cloneRange()
    let compare=range.compareBoundaryPoints(Range.END_TO_END,cRange)
    console.log(compare)
});
// comparePoint
$('.comparePoint').on('click', function () {
    let range=sle.getRangeAt(0)
    let compare=range.comparePoint($strong[0],0)
    console.log(compare)
});
// createContextualFragment
$('.createContextualFragment').on('click', function () {
    let toString="<span>一支穿云箭，千军万马来相见</span>"
    let range=document.createRange()
    range.selectNode($selected2[0])
    let doc=range.createContextualFragment(toString)
    console.log(doc)
    $('.richText1').append(doc);
    $('.richText1').append(toString);
});
// deleteContents
$('.deleteContents').on('click', function () {
    let range=sle.getRangeAt(0)
    range.deleteContents()
});
// extractContents
$('.extractContents').on('click', function () {
    let range=sle.getRangeAt(0)
    let doc=range.extractContents()
    $('.richText1').append(doc);
});
// getBoundingClientRect
$('.getBoundingClientRect').on('click', function () {
    let range=sle.getRangeAt(0)
    let rect=range.getBoundingClientRect()
    console.log(rect)
});
// getClientRects
$('.getClientRects').on('click', function () {
    let range=sle.getRangeAt(0)
    let rect=range.getClientRects()
    console.log(rect)
});
// insertNode
$('.insertNode').on('click', function () {
    let range=sle.getRangeAt(0)
    // let dom=document.createElement('p')
    // dom.innerHTML='春江潮水连海平，海上明月共潮生'
    let dom=document.createTextNode('春江潮水连海平，海上明月共潮生')
    range.insertNode(dom)
});
// intersectsNode
$('.intersectsNode').on('click', function () {
    let range=sle.getRangeAt(0)
    // let dom=document.createElement('p')
    // dom.innerHTML='春江潮水连海平，海上明月共潮生'
    let bool=range.intersectsNode($strong[0])
    console.log(bool)
});
// isPointInRange
$('.isPointInRange').on('click', function () {
    let range=sle.getRangeAt(0)
    let bool=range.isPointInRange($strong[0].childNodes[0],0)
    console.log(bool)
});
// selectNode
$('.selectNode').on('click', function () {
    let range=sle.getRangeAt(0)
    range.selectNode($strong[0])
});
// selectNodeContents
$('.selectNodeContents').on('click', function () {
    let range=sle.getRangeAt(0)
    range.selectNodeContents($strong[0])
});
// setEnd
$('.setEnd').on('click', function () {
    let range=sle.getRangeAt(0)
    range.setEnd($parent[0],2)
});
// setEndAfter
$('.setEndAfter').on('click', function () {
    let range=sle.getRangeAt(0)
    range.setEndAfter($parent[0])
});
// setEndBefore
$('.setEndBefore').on('click', function () {
    let range=sle.getRangeAt(0)
    range.setEndBefore($parent[0])
});
// setStart
$('.setStart').on('click', function () {
    let range=sle.getRangeAt(0)
    range.setStart($parent[0],1)
});
// setStartAfter
$('.setStartAfter').on('click', function () {
    let range=sle.getRangeAt(0)
    range.setStartAfter($parent[0],1)
});
// setStartBefore
$('.setStartBefore').on('click', function () {
    let range=sle.getRangeAt(0)
    range.setStartBefore($parent[0],1)
});
// surroundContents
$('.surroundContents').on('click', function () {
    let red=document.createElement('strong')
    let range=sle.getRangeAt(0)
    range.surroundContents(red)
});
// toString
$('.RtoString').on('click', function () {
    let range=sle.getRangeAt(0)
    let string=range.toString()
    console.log(string)
});