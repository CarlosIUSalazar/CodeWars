

// Eg 2:
// const aws = {compute: "ec2"};
// defaults(aws, {compute: "lambda", storage: "s3"}, {storage: "glacier", rds: "postgres"});
// => {compute: "ec2", storage: "s3", rds: "postgres"}
debugger;

const defaults = (target,source) => {
    // [SOLUTION HERE]
    for (let key in source){

      
      if (!target[key]){
        target.key = source[key];
      }
    }

    //console.log(target)
    return target;
  };
  
  //console.log(target)
  // Eg 1:

  //const target = {};
    //const source = { a: 1 };
    
    const target = { a: 1, b: NaN, c: null, d: undefined };
    const source = { a: 100, b: 200, c: 300, d: 400, e: 500 };
    
    console.log(defaults(target,source))

  const aws = {compute: "ec2"};
  //defaults(aws, {compute: "lambda", storage: "s3"});
  // => {compute: "ec2", storage: "s3"}