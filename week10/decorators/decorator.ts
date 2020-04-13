function courseProperty(target:any)
{
    Object.defineProperty(target.prototype, 'course', { value : "CSCIE31"});
}

function timer(){
    return function (target: any, key: string, descriptor: PropertyDescriptor){
        let decoratedFunction = descriptor.value; 
        descriptor.value = function (...args:any[]){
            console.log(`starting ${target} at ${new Date()}`);
            decoratedFunction.apply(this, args);
            console.log(`completing ${target} at ${new Date()}`);
        }
    }
}

@courseProperty
class myClass 
{
    @timer()
    doSomething()
    {
        console.log("i'm doing something");
    }
}

let c = new myClass();
c.doSomething();