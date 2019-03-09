function getValue(input_string, pattern)
{
  result = input_string.match(pattern);
  if (result == null)
  {
    return "";
  }
  else
  {
    if (result.length > 1)
    {
      return result[1].trim();
    }
    else
    {
      return "";
    }
  }
}

let app = new Vue({
    el: '#app',
    data: {
      todo_input: "",
      todo_items: [],
      title_patt: /([^@#+\!]+)/,
      priority_patt: /\!([^@#+\!]+)/,
      dueDate_patt: /@([^@#+!]+)/,
      duration_patt: /\+([^@#+!]+)/,
      list_patt: /#([^@#+!]+)/,
      preview: {
        title: "",
        priority: "",
        dueDate: "",
        duration: "",
        list: ""
      }
      
    },
    created() {
      
    },
    methods: {
      addItem() {
        console.log(this.preview);
        this.todo_items.push(
          {
            title: getValue(this.todo_input, this.title_patt),
            priority: getValue(this.todo_input, this.priority_patt),
            dueDate: getValue(this.todo_input, this.dueDate_patt),
            duration: getValue(this.todo_input, this.duration_patt),
            list: getValue(this.todo_input, this.list_patt),
            completed: false
          }
          );
        this.todo_input = "";
        },
      

      
    },
    computed: {
        parsedTitle() {
          
          this.preview.title = getValue(this.todo_input, this.title_patt);
          return this.preview.title;
        },

        parsedPriority() {
          
          return getValue(this.todo_input, this.priority_patt);
        },
        
        parsedDueDate() {
          
          return getValue(this.todo_input, this.dueDate_patt);
        },

        parsedDuration() {
          
          return getValue(this.todo_input, this.duration_patt);
        },

        parsedList() {
          
          return getValue(this.todo_input, this.list_patt);
        },

        filteredTodos() {
          return this.todo_items.filter(item => {
            return !item.completed;
           });
        }
        
        
      },
      watch: {
        
        
      },
  });