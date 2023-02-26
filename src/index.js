import {BinarySearchTreeNode, BinaryTreeNode, drawBinaryTree, setTheme, VisualizationType} from 'binary-tree-visualizer'

const form = document.querySelector('form');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    //get the input data from the text area
    var arrayString = document.getElementById('array').value
    var num = arrayString.split(" ").map((x) => parseInt(x));
    const root = new BinarySearchTreeNode(num[0])
    num.shift()

    //them for the binary tree
    setTheme(
        {
            radius: 25,
            leafNodeSpace: 90,
            lineHeight: 120,
            textFont: 'Poppins',
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
            }]
        }
    )
    
    //inserting the elements
    num.forEach(element => {
        root.insert(element)
    });
    
    drawBinaryTree(root, document.querySelector('canvas'), {
        type: VisualizationType.PRETTY,
        maxHeight: 200,
        maxWidth: 200
    })  
})

