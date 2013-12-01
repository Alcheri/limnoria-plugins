var createModalDiv = function() {
    if($('#infoModal').length == 0) {
        $('body').append('<!-- Modal -->'
            + '<div id="infoModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="infoModalLabel" aria-hidden="true">'
            + '  <div class="modal-header">'
            + '    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'
            + '    <h3 id="infoModalLabel">Table Information</h3>'
            + '  </div>'
            + '  <div class="modal-body">'
            + '  </div>'
            + '  <div class="modal-footer">'
            + '    <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>'
            + '  </div>'
            + '</div>');
    }
};
$(function() {
    $(".modal-table tbody tr").click(function() {
        createModalDiv();
        var headers = $(this).parent("tbody").parent("table").find('th');
        var values = $(this).children("td");
        var content = '';
        for(var i=0;i<values.length;i++) {
            content += "<h2>" + headers.eq(i).text() + "</h2>";
            content += "<p>" + values.eq(i).text() + "</p>";
        }
        $('#infoModal > .modal-body').html(content);
        $('#infoModal').modal('show');
    });
});
