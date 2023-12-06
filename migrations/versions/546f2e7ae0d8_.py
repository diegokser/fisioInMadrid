"""empty message

Revision ID: 546f2e7ae0d8
Revises: 43882cb406ad
Create Date: 2023-12-06 03:11:45.024359

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '546f2e7ae0d8'
down_revision = '43882cb406ad'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('blog', schema=None) as batch_op:
        batch_op.add_column(sa.Column('date', sa.Date(), nullable=False))
        batch_op.drop_column('fecha')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('blog', schema=None) as batch_op:
        batch_op.add_column(sa.Column('fecha', postgresql.TIMESTAMP(), autoincrement=False, nullable=False))
        batch_op.drop_column('date')

    # ### end Alembic commands ###
