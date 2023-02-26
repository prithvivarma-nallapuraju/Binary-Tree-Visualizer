import {BinarySearchTreeNode, BinaryTreeNode, drawBinaryTree, setTheme, VisualizationType} from 'binary-tree-visualizer'

const root = new BinarySearchTreeNode(100)

const ele = [50, 45, 125, 36, 48, 150, 185, 165, 165, 356, -25, 10, 25, 110, 160, 195, 380]

setTheme(
    {
        radius: 25,
        leafNodeSpace: 90,
        lineHeight: 120,
        textFont: 'Calibri',
        strokeColor: '#000000',
        growthAndShrinkTimes: 1.45,
        colorArray: [{
            borderColor: '#000000',
            bgColor: '#F8EDE5'
        },
        {
            borderColor: '#000000',
            bgColor: '#CB6CE6'
        },
        {
            borderColor: '#000000',
            bgColor: '#5CE1E6'
        },
        {
            borderColor: '#000000',
            bgColor: '#C0EFCC'
        },
        {
            borderColor: '#000000',
            bgColor: '#C8B9FF'
        },
        {
            borderColor: '#000000',
            bgColor: '#95A984'
        },
        {
            borderColor: '#000000',
            bgColor: '#FFADFC'
        },
        {
            borderColor: '#000000',
            bgColor: '#66C0C0'
        }
    ]
    }
)


ele.forEach(element => {
    root.insert(element)
});
drawBinaryTree(root, document.querySelector('canvas'), {
    type: VisualizationType.PRETTY,
    maxHeight: 200,
    maxWidth: 200
})  