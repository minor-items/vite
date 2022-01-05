module.exports = [
  {
    name: "aprojectName",
    type: "input",
    description: "document title (项目默认标题)",
  },
  {
    type: 'confirm',
    name: 'isVuex',
    message: 'iDo you need vuex (是否需要vuex)',
    default: false
  },
];

// {
//   name: "package",
//   type: "list",
//   description: "参数二",
//   choices: [
//     { name: '小米', value: 'mi' },
//     { name: '华为', value: 'huawei' },
//     { name: '苹果', value: 'apple' }
//   ]
// }
// {
//   type: 'checkbox',
//   name: 'lang',
//   message: '语言',
//   choices: [

//       { name: 'javascript', value: 1 },
//       { name: 'php', value: 2 },
//       { name: 'go', value: 3 },
      
//   ],
// }
