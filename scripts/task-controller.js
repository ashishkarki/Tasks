/*
 * This pattern is same as below but the function() is anonymous 
 which is excuted immediately because of the () paratheses at the 
 end of it. */ 
taskController = function() {
	var taskPage;
	var initialized = false;
	
	return {
		init : function(page) {
			if(!initialized){
				taskPage = page;
				
				$(taskPage).find('[required="required"]').prev('label').append(
								'<span>*</span>').children('span').addClass(
								'required');
						
				// Add color effect to all the even rows 
				$(taskPage).find('tbody tr:even').addClass('even');
				
				// Add task event handler
				$(taskPage).find('#btnAddTask').click(function(evt) {
					evt.preventDefault(); 
					$(taskPage).find('#taskCreation').removeClass('not');
				});
				
				// Highlight the row that is clicked
				var rowClicked = function(evt) {
					$(evt.target).closest('td').siblings().andSelf()
									.toggleClass('rowHighlight');
				};
				$(taskPage).find('tbody tr').click(rowClicked);
				
				// add evt listener to deleteRow class dynamically
				$(taskPage).find('#tblTasks tbody').on('click', '.deleteRow',function(evt) {
						evt.preventDefault(); 
						$(evt.target).parents('tr').remove();
				});
						
				// add event listener to saveTask link
				$(taskPage).find('#saveTask').click(function(evt) {
						evt.preventDefault();
						if($(taskPage).find('form').valid()){
							var task = $('form').toObject();
							$('#taskRow').tmpl(task).appendTo($(taskPage).find('#tblTasks tbody'));
						}
				});
				
				initialized = true;
			}
		} // EO public function
	} // EO return
}();

/*
 * The importance of the parentheses () at the end of the function() 
 is that the variable taskCOntroller is set to the object returned 
 by that anonymous function and not the function itself. So this 
 pattern is singleton pattern*/
 
/*
function createIncrementer(){
	var i = 0;
	return {
		increment:function(){
			return ++i;
		}
	}
};

*/
