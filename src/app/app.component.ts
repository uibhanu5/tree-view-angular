import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  arr = [
    {
      id: "group_1",
      name: "Group 1",
      items: [
        {
          id: "group_1.abc",
          name: "Tenet HealthCare Corporation",
          total: 10880947583,
          expand: false,
          childs: [
            {
              id: "group_1.abc.action_See_List",
              name: "DY",
              total: 311057078,
              description: "Dummy",
              expand: false,
              subChilds: [
                {
                  id: "group_1.abc.action_See_List_List1",
                  name: "DY",
                  total: 1263673,
                  description: "Dummy",
                  expand: false,
                  sub_Childs: [
                    {
                      id: "group_1.abc.action_See_List_List1",
                      name: "DY",
                      total: 1263673,
                      description: "Dummy",
                      expand: false,
                      data: [
                        {
                          id: 1,
                          name: "UN2N2",
                          description: "FIAM ITM INF-PR BD D $585112",
                          total: 83729837,
                        },
                        {
                          id: 2,
                          name: "UN2N2",
                          description: "FIAM ITM INF-PR BD D $585112",
                          total: 83729837,
                        },
                        {
                          id: 3,
                          name: "UN2N2",
                          description: "FIAM ITM INF-PR BD D $585112",
                          total: 83729837,
                        },
                        {
                          id: 4,
                          name: "UN2N2",
                          description: "FIAM ITM INF-PR BD D $585112",
                          total: 83729837,
                        },
                        {
                          id: 5,
                          name: "UN2N2",
                          description: "FIAM ITM INF-PR BD D $585112",
                          total: 83729837,
                        },
                      ],
                    },
                    // {
                    //   id: "group_1.abc.action_See_List_List1",
                    //   name: "UN2N3",
                    //   total: 1263673,
                    //   description: "FIAM ITM INF-PR BD D $585112",
                    //   expand: false,
                    // },
                  ],
                },
              ],
            }
          ],
        },
      ],
    },
  ];
  showData: boolean;

  constructor() {}

  ngOnInit() {}

  checkChild(group_i, parent_i, i) {
    this.arr[group_i].items[parent_i].childs[i].expand =
      !this.arr[group_i].items[parent_i].childs[i].expand;
  }

  checkSubChild(group_i, parent_i, child_i, i) {
    this.arr[group_i].items[parent_i].childs[child_i].subChilds[i].expand =
      !this.arr[group_i].items[parent_i].childs[child_i].subChilds[i].expand;
  }

  checklastChild(){
    this.showData = !this.showData;
  }
}
