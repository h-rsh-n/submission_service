class TestService{
  constructor(){
    //inject dependency here
  }
  async pingCheck(){
    return 'pong'
  }
}
module.exports = TestService;