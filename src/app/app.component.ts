import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  listChildChanged = [];
  arr = [
    {
      id: "group_1",
      name: "Group 1",
      items: [
        {
          id: "group_1.abc",
          name: "Parent1",
          // checked: false,
          expand: false,
          childs: [
            {
              id: "group_1.abc.action_See_List",
              name: "See List",
              //  checked: false,
              expand: false,
              subChilds: [
                {
                  id: 'group_1.abc.action_See_List_List1',
                  name: 'List1',
                  //  checked: false,
                  expand: false,
                  sub_Childs: [
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      //checked: false,
                      expand: false,
                    },
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      // checked: false,
                      expand: false,
                    }
                  ]
                },
                {
                  id: 'group_1.abc.action_See_List_List2',
                  name: 'List2',
                  //  checked: false,
                  expand: false,
                  sub_Childs: [
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      // checked: false,
                      expand: false,
                    },
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      // checked: false,
                      expand: false,
                    }
                  ]
                },

              ]
            },
            {
              id: "group_1.abc.action_Edit",
              name: "Edit",
              //  checked: false,
              expand: false,
              subChilds: [
                {
                  id: 'group_1.abc.action_Edit_List1',
                  name: 'List1',
                  //      checked: false,
                  expand: false,
                  sub_Childs: [
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      //        checked: false,
                      expand: false,
                    },
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      //        checked: false,
                      expand: false,
                    }
                  ]
                },
                {
                  id: 'group_1.abc.action_Edit_List2',
                  name: 'List2',
                  //     checked: false,
                  expand: false,
                  sub_Childs: [
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      // checked: false,
                      expand: false,
                    },
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      // checked: false,
                      expand: false,
                    }
                  ]
                },
              ]

            },
            {
              id: "group_1.abc.action_Delete",
              name: "Delete",
              // checked: false,
              expand: false,
              subChilds: [
                {
                  id: 'group_1.abc.action_Delete_List1',
                  name: 'List1',
                  // checked: false,
                  expand: false,
                  sub_Childs: [
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      //  checked: false,
                      expand: false,
                    },
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      // checked: false,
                      expand: false,
                    }
                  ]
                },
                {
                  id: 'group_1.abc.action_Delete_List2',
                  name: 'List2',
                  // checked: false,
                  expand: false,
                  sub_Childs: [
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      // checked: false,
                      expand: false,
                    },
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      //  checked: false,
                      //expand: true,
                    }
                  ]
                },
              ]
            },
            {
              id: "group_1.abc.action_Print",
              name: "Print",
              //  checked: false,
              expand: false,
              subChilds: [
                {
                  id: 'group_1.abc.action_Print_List1',
                  name: 'List1',
                  //  checked: false,
                  expand: false,
                  sub_Childs: [
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      //  checked: false,
                      expand: false,
                    },
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      //  checked: false,
                      expand: false,
                    }
                  ]
                },
                {
                  id: 'group_1.abc.action_Print_List2',
                  name: 'List2',
                  // checked: false,
                  expand: false,
                  sub_Childs: [
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      //  checked: false,
                      expand: false,
                    },
                    {
                      id: 'group_1.abc.action_See_List_List1',
                      name: 'List1',
                      //  checked: false,
                      expand: false,
                    }
                  ]
                },
              ]
            },
          ],
        }
      ],
    },
  ];


  checkChild(group_i, parent_i, i) {
    this.arr[group_i].items[parent_i].childs[i].expand =
      !this.arr[group_i].items[parent_i].childs[i].expand;
  }

  checkSubChild(group_i, parent_i, child_i, i) {
    this.arr[group_i].items[parent_i].childs[child_i].subChilds[i].expand =
      !this.arr[group_i].items[parent_i].childs[child_i].subChilds[i].expand;
  }
}
