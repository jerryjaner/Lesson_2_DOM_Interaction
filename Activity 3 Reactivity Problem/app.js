new Vue({ 
el: '#assignment', 

data: {
count:0,
timeout: 5000
},

computed: {
          result: function()
          {
            if (this.count == 37)
            {
                return 'Done';
            }
            else if (this.count > 37)
            {
            				return 'Too much!';
            }
            else 
            {
            				return 'Not there yet.';
            }
          } 
        },
        
      watch: {
        result: function()
        {
          var res = this;
          setTimeout(
          function()
          {
          res.count = 0;
          },5000);
        }
      }

});
